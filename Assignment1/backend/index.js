const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIO = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Models
const Match = require("./models/match");

// API Endpoints

// Get current match data (current over and history)
app.get("/api/match", async (req, res) => {
  try {
    const match = await Match.findOne();
    res.json(match);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get over history
app.get("/api/overHistory", async (req, res) => {
  try {
    const match = await Match.findOne();
    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }
    res.json(match.overHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update current ball and over (after 6 balls a new over starts and previous over added to history)
app.post("/api/update", async (req, res) => {
  const { runs, isOut } = req.body;

  try {
    let match = await Match.findOne();
    if (!match) {
      // Initialize match if it doesn't exist
      match = new Match({
        currentOver: {
          balls: [{ runs: 0, isOut: false, ballNumber: 1 }],
          overNumber: 1,
        },
        overHistory: [],
      });
    }

    const currentOver = match.currentOver;
    let currentBall = currentOver.balls.findIndex(
      (ball) => ball.runs === 0 && !ball.isOut
    );

    // Add ball to current over
    if (currentBall === -1 || currentBall === 5) {
      // If no ball is left or it's the last ball of the over, start a new over
      currentOver.balls.push({
        runs,
        isOut,
        ballNumber: currentOver.balls.length + 1,
      });
      if (currentOver.balls.length === 6) {
        // End current over and start a new over
        match.currentOver = {
          balls: [],
          overNumber: currentOver.overNumber + 1,
        };
        match.overHistory.push(currentOver); // Add completed over to overHistory
      }
    } else {
      // Update existing ball in the current over
      currentOver.balls[currentBall] = {
        runs,
        isOut,
        ballNumber: currentBall + 1, // Ensure ballNumber is correctly updated
      };
    }

    // Calculate runs and wickets for the current over
    match.currentOver.runs = currentOver.balls.reduce(
      (total, ball) => total + (ball.isOut ? 0 : ball.runs),
      0
    );
    match.currentOver.wickets = currentOver.balls.filter(
      (ball) => ball.isOut
    ).length;

    await match.save();

    // Emit a socket event for real-time updates
    io.emit("score-updated", match);
    res.json(match);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

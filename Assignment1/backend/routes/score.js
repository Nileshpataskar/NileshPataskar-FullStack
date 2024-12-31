const express = require("express");
const Match = require("../models/match");
const router = express.Router();

// POST request to add a ball
router.post("/add-ball", async (req, res) => {
  const { matchId, overIndex, ballData } = req.body; // matchId, overIndex (current over), ballData (run, Out, or null)

  try {
    const match = await Match.findById(matchId);
    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    // Validate ball data
    if (![0, 1, 2, 3, 4, 6, "Out"].includes(ballData) && ballData !== null) {
      return res.status(400).json({ message: "Invalid ball data" });
    }

    // Add the ball to the appropriate over
    const currentOver = match.overs[overIndex];
    if (currentOver && currentOver.balls.length < 6) {
      currentOver.balls.push({ ball: ballData });
      await match.save();
      return res.json({ message: "Ball added successfully", match });
    } else {
      return res.status(400).json({ message: "Over is already complete" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// POST request to finalize the over
router.post("/update-over", async (req, res) => {
  const { matchId, overIndex } = req.body;

  try {
    const match = await Match.findById(matchId);
    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    // Move to the next over by ensuring the current over has 6 balls
    const currentOver = match.overs[overIndex];
    if (currentOver && currentOver.balls.length === 6) {
      match.overs.push({ balls: [] }); // Create a new over for the next one
      await match.save();
      return res.json({
        message: "Over finalized and new over started",
        match,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Current over is not yet complete" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// GET request to get match details
router.get("/", async (req, res) => {
  try {
    const match = await Match.findOne();
    if (!match) {
      return res.status(404).json({ message: "No match found" });
    }
    res.json(match);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

module.exports = router;

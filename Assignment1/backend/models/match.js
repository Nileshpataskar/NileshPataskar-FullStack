const mongoose = require('mongoose');

const ballSchema = new mongoose.Schema({
  runs: { type: Number, required: true },
  isOut: { type: Boolean, required: true },
  ballNumber: { type: Number, required: true }
});

const overSchema = new mongoose.Schema({
  balls: [ballSchema],
  overNumber: { type: Number, required: true },
  runs: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 }
});

const matchSchema = new mongoose.Schema({
  currentOver: overSchema,
  overHistory: [overSchema]
});

module.exports = mongoose.model('Match', matchSchema);

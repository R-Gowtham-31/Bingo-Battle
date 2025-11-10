const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  socketId: String,
  name: String,
  board: { type: [Number], default: [] },       // 25 numbers in user order
  selected: { type: [Number], default: [] },    // indexes (0-24) they've marked
  finalized: { type: Boolean, default: false }
});

const RoomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  players: { type: [PlayerSchema], default: [] }, // up to 2
  turnIndex: { type: Number, default: 0 }, // which player's turn (0 or 1)
  status: { type: String, default: 'waiting' }, // waiting | ready | playing | finished
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Room', RoomSchema);

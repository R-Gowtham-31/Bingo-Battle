require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
// const { nanoid } = require('nanoid');
const Room = require('./models/Room');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bingo_realtime';
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Mongo connected'))
  .catch(e => console.error('Mongo err', e));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve frontend from /public

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

function generateRoomId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

/* ---------- REST: create room (optional) ---------- */
app.post('/create-room', async (req, res) => {
   try {
    const roomId = generateRoomId();
    const room = new Room({ roomId });
    await room.save();

    res.json({
      roomId,
      link: `${BASE_URL}/?room=${roomId}`
    });

  } catch (err) {
    console.error("Error creating room:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* ---------- Socket.io ---------- */
io.on('connection', socket => {
  console.log('socket connected', socket.id);

  // joinRoom: { roomId, name }
  socket.on('joinRoom', async (payload, cb) => {
    try {
      const { roomId, name } = payload;
      const room = await Room.findOne({ roomId });

      if (!room) return cb({ error: 'Room not found' });

      if (room.players.length >= 2) return cb({ error: 'Room full' });

      // create player
      const player = { socketId: socket.id, name, board: [], selected: [], finalized: false };
      room.players.push(player);

      // if two players -> status waiting until both finalize
      if (room.players.length === 2) room.status = 'waiting';

      await room.save();
      socket.join(roomId);

      // inform others in room of join
      io.to(roomId).emit('roomUpdate', sanitizeRoom(room));
      cb({ ok: true, room: sanitizeRoom(room) });
    } catch (e) {
      console.error(e);
      cb({ error: 'Server error' });
    }
  });

  // finalizeBoard: {roomId, board: [25 numbers]}
  socket.on('finalizeBoard', async (payload, cb) => {
    try {
      const { roomId, board } = payload;
      const room = await Room.findOne({ roomId });
      if (!room) return cb({ error: 'Room not found' });

      const pIndex = room.players.findIndex(p => p.socketId === socket.id);
      if (pIndex === -1) return cb({ error: 'Not in room' });

      room.players[pIndex].board = board.slice(0,25);
      room.players[pIndex].finalized = true;

      // if both finalized -> set playing, set turnIndex randomly
      if (room.players.length === 2 && room.players.every(p => p.finalized)) {
        room.status = 'playing';
        room.turnIndex = Math.random() < 0.5 ? 0 : 1;
      }

      await room.save();
      io.to(roomId).emit('roomUpdate', sanitizeRoom(room));
      cb({ ok: true, room: sanitizeRoom(room) });
    } catch (e) {
      console.error(e);
      cb({ error: 'Server error' });
    }
  });

  // makeMove: {roomId, index} index is 0..24 referring to player's own board index they click
  socket.on('makeMove', async (payload, cb) => {
    try {
      const { roomId, index } = payload;
      const room = await Room.findOne({ roomId });
      if (!room) return cb({ error: 'Room not found' });

      if (room.status !== 'playing') return cb({ error: 'Game not playing' });

      const pIndex = room.players.findIndex(p => p.socketId === socket.id);
      if (pIndex === -1) return cb({ error: 'Not in room' });

      if (room.turnIndex !== pIndex) return cb({ error: 'Not your turn' });

      // Get the clicked number from this player's board
      const number = room.players[pIndex].board[index];
      if (number === undefined) return cb({ error: 'Invalid move' });

      // prevent re-clicks: ensure not already selected in player's selected
      if (room.players[pIndex].selected.includes(index)) return cb({ error: 'Already selected' });

      // mark player's selected index
      room.players[pIndex].selected.push(index);

      // also mark corresponding index in opponent's selected (if exists)
      const oppIndex = 1 - pIndex;
      // find where opponent has this number in their board
      const oppPos = room.players[oppIndex].board.indexOf(number);
      if (oppPos !== -1 && !room.players[oppIndex].selected.includes(oppPos)) {
        room.players[oppIndex].selected.push(oppPos);
      }

      // check wins (server-side)
      const pSelected = room.players[pIndex].selected;
      const oppSelected = room.players[oppIndex].selected;

      const userWins = countWinningLines(pSelected) >= 5;
      const oppWins = countWinningLines(oppSelected) >= 5;

      if (userWins || oppWins) {
        room.status = 'finished';
      } else {
        // pass turn to opponent
        room.turnIndex = oppIndex;
      }

      await room.save();

      // broadcast updated state
      io.to(roomId).emit('roomUpdate', sanitizeRoom(room));

      // if finished, emit gameOver with both boards revealed
      if (room.status === 'finished') {
        const reveal = {
          winner: userWins ? pIndex : (oppWins ? oppIndex : null),
          boards: room.players.map(p => ({
            board: p.board,
            selected: p.selected
          }))
        };
        io.to(roomId).emit('gameOver', reveal);
      }

      cb({ ok: true, room: sanitizeRoom(room) });
    } catch (e) {
      console.error(e);
      cb({ error: 'Server error' });
    }
  });

  // handle disconnect: remove socket player from room (light approach)
  socket.on('disconnect', async () => {
    try {
      const room = await Room.findOne({ "players.socketId": socket.id });
      if (!room) return;
      const idx = room.players.findIndex(p => p.socketId === socket.id);
      if (idx !== -1) {
        room.players.splice(idx, 1);
        room.status = 'waiting';
        await room.save();
        io.to(room.roomId).emit('roomUpdate', sanitizeRoom(room));
      }
    } catch (e) {
      console.error(e);
    }
  });
});

/* ---------- Helpers ---------- */

function sanitizeRoom(roomDoc) {
  const room = roomDoc.toObject();
  // send limited info: each player sees the other's board only when status==='finished'
  const publicPlayers = room.players.map((p) => ({
    name: p.name,
    finalized: p.finalized,
    selected: p.selected, // it's okay to share selected (so UI can show marks)
    boardRevealed: room.status === 'finished' ? p.board : (p.socketId ? (p.socketId) : null),
    // We will not reveal opponent's board array unless finished; frontends will receive full reveal in gameOver event
    socketId: p.socketId
  }));
  return {
    roomId: room.roomId,
    players: publicPlayers,
    turnIndex: room.turnIndex,
    status: room.status
  };
}

function countWinningLines(selected) {
  const lines = [
    [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
    [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
    [0,6,12,18,24],[4,8,12,16,20]
  ];
  let count = 0;
  for (let line of lines) {
    if (line.every(i => selected.includes(i))) count++;
  }
  return count;
}

/* ---------- start ---------- */
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

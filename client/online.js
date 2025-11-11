const backendURL = "https://bingo-battle-server.onrender.com/";
const socket = io(backendURL);
console.log('Connecting to backend at', backendURL);
// UI elements
const nameInput = document.getElementById('nameInput');
const createBtn = document.getElementById('createBtn');
const joinBtn = document.getElementById('joinBtn');
const roomInput = document.getElementById('roomInput');
const roomInfo = document.getElementById('roomInfo');
const statusEl = document.getElementById('status');
const finalizeBtn = document.getElementById('finalizeBtn');
const resetBoardBtn = document.getElementById('resetBoardBtn');
const userTable = document.getElementById('userTable');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const opponentReveal = document.getElementById('opponentReveal');
const bingoHeader = document.getElementsByClassName('bingo-header-cell');

let myRoom = null;
let myIndex = null; // 0 or 1
let myBoard = Array(25).fill(null); // user fill
let finalized = false;

function makeUserGrid() {
    userTable.innerHTML = '';
    for (let i=0;i<25;i++){
    const d = document.createElement('div');
    d.className = 'bingo-cell-empty';
    d.id = 'cell-' + (i+1);
    d.addEventListener('click', () => onCellClick(i, d));
    d.textContent = myBoard[i] === null ? '' : myBoard[i];
    userTable.appendChild(d);
    }
}
makeUserGrid();

function onCellClick(i, el){
    if (finalized) return;
    if (myBoard[i] === null) {
    // fill sequentially with numbers 1..25 in order-like before
    // but to keep control, let user choose or auto-insert next number:
    // We'll auto assign the next available number 1..25 in order to maintain consistent boards
    const next = myBoard.filter(x=>x!==null).length + 1;
    myBoard[i] = next;
    el.textContent = next;
    el.classList.replace('bingo-cell-empty', 'bingo-cell-pre');
    } else {
    // allow clearing if not finalized
    myBoard[i] = null;
    el.textContent = '';
    el.classList.replace('bingo-cell-pre', 'bingo-cell-empty');
    }
    updateFinalizeState();
}

function updateFinalizeState(){
    const filledCount = myBoard.filter(x=>x!==null).length;
    finalizeBtn.disabled = filledCount !== 25;
    resetBoardBtn.disabled = filledCount === 0;
}

resetBoardBtn.addEventListener('click', ()=>{
    if (confirm('Reset your board?')) {
    myBoard = Array(25).fill(null);
    finalized = false;
    makeUserGrid();
    updateFinalizeState();
    }
});

finalizeBtn.addEventListener('click', ()=>{
    if (confirm('Finalize and submit your board? After finalize you cannot change it.')) {
    socket.emit('finalizeBoard', { roomId: myRoom, board: myBoard }, (resp) => {
        if (resp.error) return alert(resp.error);
        finalized = true;
        finalizeBtn.disabled = true;
        statusEl.textContent = 'Board submitted, waiting for opponent...';
        console.log(userTable.classList);
        for (let i=0;i<25;i++){
        const el = document.getElementById('cell-' + (i+1));
        if (!el) continue;
        el.classList.replace('bingo-cell-pre', 'bingo-cell');
    }
    });
    }
});

createBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim() || 'Player';
    // create room via REST
    const r = await fetch('backendURL/create-room', { method:'POST' }).then(r=>r.json());
    if (r.roomId) {
    roomInput.value = r.roomId;
    joinRoom(r.roomId, name);
    } else {
    alert('Could not create room');
    }
});

joinBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'Player';
    const code = roomInput.value.trim();
    if (!code) return alert('Enter room code or create a room');
    joinRoom(code, name);
});

copyLinkBtn.addEventListener('click', () => {
    if (!myRoom) return;
    const link = location.origin + '/public?room=' + myRoom;
    navigator.clipboard.writeText(link).then(()=> alert('Link copied'));
});

// auto-join if ?room= in URL
(function autoJoinFromURL(){
    const params = new URLSearchParams(location.search);
    if (params.has('room')) {
    roomInput.value = params.get('room');
    }
})();

function joinRoom(roomId, name) {
    socket.emit('joinRoom', { roomId, name }, (resp) => {
    if (resp.error) return alert(resp.error);
    myRoom = roomId;
    // determine which index you are (0 or 1)
    // server sends players array with socketId — compare
    const serverRoom = resp.room;
    const meIndex = serverRoom.players.findIndex(p => p.socketId === socket.id);
    myIndex = meIndex === -1 ? serverRoom.players.findIndex(p => p.socketId === null) : meIndex;
    roomInfo.innerText = 'Room: ' + roomId + '  |  Players: ' + serverRoom.players.map(p => p.name).join(', ');
    statusEl.innerText = 'Joined. Finalize your board (fill all 25 cells)';
    copyLinkBtn.style.display = 'inline-block';
    makeUserGrid();
    updateFinalizeState();
    });
}

/* ---------- socket events ---------- */
socket.on('roomUpdate', (room) => {
    // room: {roomId, players:[{name,finalized,selected,...}], turnIndex, status}
    if (!myRoom || room.roomId !== myRoom) {
    // ignore updates for other rooms
    return;
    }
    // find my index (again)
    const me = room.players.findIndex(p => p.socketId === socket.id);
    if (me !== -1) myIndex = me;

    // update UI info
    roomInfo.innerText = 'Room: ' + room.roomId + '  |  Players: ' + room.players.map(p => p.name).join(', ');
    statusEl.innerText = `Status: ${room.status}  |  Turn: ${room.turnIndex === undefined ? '-' : (room.turnIndex === myIndex ? 'Your turn' : "Opponent's turn")}`;

    // mark selected cells on your board and disable interaction when playing
    if (room.players[myIndex]) {
    // show selected marks
    const sel = room.players[myIndex].selected || [];
    for (let i=0;i<25;i++){
        const el = document.getElementById('cell-' + (i+1));
        if (!el) continue;
        if (sel.includes(i)) el.classList.add('marked');
    }
    let userLines=0;
    const lines = [
        [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
        [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
        [0,6,12,18,24],[4,8,12,16,20]
    ];
    lines.forEach(l => {
        if (l.every(i => sel.includes(i))) userLines++;
    });
    console.log(bingoHeader,bingoHeader[0]);
    for (let i = 0; i < Math.min(5, userLines); i++) bingoHeader[i].classList.add("marked");
    }

    // opponent info: show which cells selected (but not their board numbers) by count
    // We'll just display opponent selected count
    if (room.players[1 - myIndex]) {
    // nothing for now
    }

    // If game starts, disable finalize and editing
    if (room.status === 'playing') {
    finalized = true;
    finalizeBtn.disabled = true;
    }

    // If finished, the server will emit gameOver (see below)
});

socket.on('gameOver', (payload) => {
    // payload: { winner: 0|1, boards: [ {board, selected}, ... ] }
    if (!myRoom) return;
    const { winner, boards } = payload;
    const youWon = (winner === myIndex);
    statusEl.innerText = youWon ? 'You won! Opponent board revealed below.' : 'You lost. Opponent board revealed below.';
    // reveal both boards
    opponentReveal.innerHTML = '';
    for (let p=0;p<boards.length;p++){
    const block = document.createElement('div');
    block.style.marginBottom = '14px';
    if(p===myIndex){
        continue;
    }
    block.innerHTML = `<h4>${p===myIndex ? 'Your board' : 'Opponent board'} ${winner===p? '(Winner)':''}</h4>
        <div class="bingo-header">${['B','I','N','G','O'].map(c=>`<div class="bingo-header-cell final">${c}</div>`).join('')}</div>
        <div class="bingo-table" id="reveal-${p}"></div>`;
    opponentReveal.appendChild(block);
    const grid = document.getElementById('reveal-' + p);
    for (let i=0;i<25;i++){
        const d = document.createElement('div');
        d.className = 'bingo-cell';
        if (boards[p].selected.includes(i)) d.classList.add('marked');
        d.innerText = boards[p].board[i];
        grid.appendChild(d);
        
    }
    const opponentHeader = block.getElementsByClassName('bingo-header-cell final');
    let userLines=0;
    const lines = [
        [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
        [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
        [0,6,12,18,24],[4,8,12,16,20]
    ];
    lines.forEach(l => {
        if (l.every(i => boards[p].selected.includes(i))) userLines++;
    });
    console.log(opponentHeader,opponentHeader[0]);
    for (let i = 0; i < Math.min(5, userLines); i++) opponentHeader[i].classList.add("marked");
    }
});

// on load: if query param has room, attempt to join automatically when name provided
window.addEventListener('load', () => {
    const q = new URLSearchParams(location.search).get('room');
    if (q) {
    // wait for name typed, or auto join with default name
    if (nameInput.value.trim()) {
        joinRoom(q, nameInput.value.trim());
    } else {
        // auto join as Guest
        joinRoom(q, 'Guest');
    }
    }
});

// make a move (click your finalized visible cell to mark it during playing)
// We need UI for making moves: when in playing mode, the player's board entries are visible and clickable
// We'll attach a click listener that, when game is playing, emits makeMove with the index clicked.
userTable.addEventListener('click', (ev) => {
    if (!finalized) return;
    if (!myRoom) return;
    // find the clicked cell index
    const target = ev.target;
    if (!target || !target.id) return;
    const id = target.id.replace('cell-', '');
    const idx = parseInt(id,10) - 1;
    // ensure it's not already marked
    if (target.classList.contains('marked')) return;
    // emit makeMove
    socket.emit('makeMove', { roomId: myRoom, index: idx }, (resp) => {
    if (resp && resp.error) alert(resp.error);
    });
});

# 🎲 Bingo Multiplayer (Real-Time Online & Computer Mode)

A full-stack **real-time multiplayer Bingo game** built with:

✅ Vite + JavaScript (Frontend)  
✅ Node.js + Express (Backend)  
✅ MongoDB + Mongoose (Database)  
✅ Socket.IO (Realtime gameplay)  

Players can create rooms, invite friends using a link, customize their boards, and battle online.  
Includes both **Play vs Computer** and **Online Multiplayer Mode**.

---

## 🚀 Live Features

### ✅ **1. Online Multiplayer (Real-Time)**
- Create a room instantly  
- Share invite link with friends  
- Two-player real-time gameplay  
- Turn-based logic  
- Automatic win detection  
- Opponent board revealed after match  

### ✅ **2. Custom Board Builder**
- Players fill 25 cells manually  
- Board must be finalized before match begins  
- Opponent board hidden until game ends  

### ✅ **3. Play vs Computer Mode**
- Smart computer logic  
- Computer can make intelligent and random moves  
- Computer never moves after user wins  

---

## 🛠 Tech Stack

### **Frontend**
- HTML, CSS, JavaScript
- Vite
- socket.io-client

### **Backend**
- Node.js
- Express
- Socket.IO
- Mongoose
- MongoDB

### **Database**
- MongoDB (Rooms, Player data, Board state)

-----------------------------------------------------------------------

## 🔧 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/bingo-multiplayer.git
cd bingo-multiplayer


📦 Install Dependencies


✅ Frontend
cd client
npm install


✅ Backend
cd server
npm install


⚙️ Environment Variables
Create a file:
    server/.env
Add:
    MONGO_URI=mongodb://127.0.0.1:27017/bingo
    PORT=5000 
    BASE_URL=http://localhost:5173




###▶️ Run the Project

✅ Backend (Express + Socket.IO)
cd server
npm run dev

✅ Frontend (Vite)
cd client
npm run dev
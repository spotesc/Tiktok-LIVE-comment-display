const express = require("express");
const { WebcastPushConnection } = require("tiktok-live-connector");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Start HTTP server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Store connected clients
let clients = [];

// When a browser connects
wss.on("connection", ws => {
    clients.push(ws);
    console.log("Client connected");

    ws.on("close", () => {
        clients = clients.filter(client => client !== ws);
    });
});

// TikTok Live connection
let tiktokUsername = "spotesc"; // your TikTok username
let tiktokConnection = new WebcastPushConnection(tiktokUsername);

tiktokConnection.connect().then(state => {
    console.log(`Connected to roomId: ${state.roomId}`);
}).catch(err => {
    console.error("Failed to connect:", err);
});

// On new chat messages
tiktokConnection.on("chat", data => {
    broadcast({ type: "chat", ...data });
});

// On new gifts
tiktokConnection.on("gift", data => {
    broadcast({ type: "gift", ...data });
});

// Helper: send to all clients
function broadcast(data) {
    clients.forEach(ws => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(data));
        }
    });
}

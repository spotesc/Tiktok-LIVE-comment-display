const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { WebcastPushConnection } = require("tiktok-live-connector");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 8080;
const TIKTOK_USERNAME = "spotesc"; // Your TikTok username here

// Start connection to TikTok live chat
const tiktokConnection = new WebcastPushConnection(TIKTOK_USERNAME);

tiktokConnection.connect().catch((err) => {
  console.error("TikTok connection error:", err);
});

tiktokConnection.on("chat", (chat) => {
  // Broadcast chat to all connected websocket clients
  const msg = JSON.stringify({
    type: "chat",
    user: chat.uniqueId,
    message: chat.comment,
    userProfilePic: chat.profilePictureUrl,
  });

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg);
    }
  });
});

tiktokConnection.on("disconnected", () => {
  console.log("TikTok disconnected, trying to reconnect...");
  setTimeout(() => {
    tiktokConnection.connect().catch(console.error);
  }, 10000);
});

app.use(express.static("public")); // serve frontend files from /public folder

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

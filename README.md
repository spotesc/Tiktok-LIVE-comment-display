# TikTok Live Overlay with Now Playing (Spotify)

🎥 A sleek, responsive overlay for TikTok Live streamers that dynamically displays chat messages with frosted glass styling — plus a Spotify “Now Playing” widget that automatically fades in and out depending on chat activity.

## 🚀 Features

- 🧊 Frosted glass effect for chat
- 🎶 Spotify Now Playing integration (6K Labs widget)
- ✨ Smooth crossfade between chat and music display
- 📜 Auto-scroll + message stack animation
- 🧼 Clean, modern UI with responsive design
- 🔒 Safe HTML rendering (prevents code injection)

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/spotesc/Tiktok-LIVE-comment-display.git
   cd tiktok-live-overlay
Run it locally
Just open index.html in your browser, or serve with a local server (e.g. using Live Server in VS Code).

📡 WebSocket Backend
The overlay listens for incoming WebSocket events:

{
  "type": "chat",
  "user": "username",
  "message": "Message content",
  "userProfilePic": "https://profile.picture.url"
}


You can pair this frontend with a backend using tools like:

[tiktok-live-connector](https://github.com/zerodytrash/TikTok-Live-Connector)

[eulerstream](https://www.eulerstream.com/)

🎨 Customization
Swap the Spotify widget iframe for your own from [6K Labs](https://6klabs.com/)

Adjust message fade timing or styling in the CSS section

Add support for gifts, likes, emojis, and more

📺 How to Use in OBS
Go to GitHub Pages link:
https://yourusername.github.io/tiktok-live-overlay/

In OBS Studio:

Add a Browser Source

Paste the GitHub Pages URL

Set size: 350 x 100 (or as needed)

Set "Refresh browser when scene becomes active"

🧑‍💻 Author
[Spotesc](https://www.tiktok.com/@spotesc)
🎮 Twitch / Kick / TikTok Gaming Creator
📧 spotesc@outlook.com

📄 License
MIT License — Free to use, modify, and distribute.

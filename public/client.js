const ws = new WebSocket(`wss://${window.location.host}`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "chat") {
        addChatMessage(`${data.uniqueId}: ${data.comment}`);
    }

    if (data.type === "gift") {
        addChatMessage(`${data.uniqueId} sent ${data.giftName} x${data.repeatCount}`);
    }
};

function addChatMessage(msg) {
    const chatDiv = document.getElementById("chat");
    const el = document.createElement("div");
    el.textContent = msg;
    chatDiv.appendChild(el);
}

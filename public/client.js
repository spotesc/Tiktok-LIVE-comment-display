const ws = new WebSocket(`wss://${window.location.host}`);

ws.onopen = () => {
  console.log("WebSocket connected");
};

ws.onerror = (error) => {
  console.error("WebSocket error:", error);
};

ws.onmessage = (event) => {
  console.log("WebSocket message received:", event.data);
  // existing message handling code...
};

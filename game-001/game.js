
// Sample game logic for BrowserQuest
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 50, 50); // Sample game object (player)
}

setInterval(draw, 1000 / 60); // Draw every frame

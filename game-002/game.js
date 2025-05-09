
// Sample game logic for Blobby Volley
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50); // Sample player
}

setInterval(update, 1000 / 60);

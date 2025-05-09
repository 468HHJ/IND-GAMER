
// Sample logic for 2048
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 30, 30); // Sample block
}

setInterval(draw, 1000 / 60);

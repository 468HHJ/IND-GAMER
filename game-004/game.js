
// Sample logic for Clumsy Bird
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let birdY = 150;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(50, birdY, 30, 30); // Sample bird
    birdY += 1;
}

setInterval(update, 1000 / 60);

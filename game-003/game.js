
// Sample Tetris logic
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tetromino = [[1, 1, 1], [0, 1, 0]];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(50, 50, 30, 30); // Sample block
}

setInterval(draw, 1000 / 60);

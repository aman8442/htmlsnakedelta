var a = 20;
var row = 20; 
var col = 20; 
var board;
var context;
var snakeX = a * 5;
var snakeY = a * 5;
var speedX = 0; 
var speedY = 0; 
var snakeBody = [];
var foodX;
var foodY;
var gameOver = false;
window.onload = function () 
{
	board = document.getElementById("board");
	board.height = row * a;
	board.width = col * a;
	context = board.getContext("2d");

	placeFood();
	document.addEventListener("keyup", changeDirection); 
	
	setInterval(update, 1750/ 10);
}
function update() 
{
	if (gameOver)
	{
		return;
	}
	context.fillStyle = "black";
	context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "orange";
	context.fillRect(foodX, foodY, a,a);
    if (snakeX == foodX && snakeY == foodY) 
	{
		snakeBody.push([foodX, foodY]);
		placeFood();
	}
	for (let i =snakeBody.length - 1; i > 0; i--) {
			snakeBody[i] = snakeBody[i - 1];
	}
	if (snakeBody.length) 
	{
		snakeBody[0] = [snakeX, snakeY];
	}
    context.fillStyle = "yellow";
	snakeX += speedX * a; 
	snakeY += speedY * a; 
	context.fillRect(snakeX, snakeY, a, a);
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], a, a);
	}
    if (snakeX < 0
		|| snakeX > col * a
		|| snakeY < 0
		|| snakeY > row * a)
    {
		gameOver = true;
		alert("Game Over");
	}
	    for (let i = 0; i < snakeBody.length; i++) {
		if (snakeX== snakeBody[i][0] && snakeY == snakeBody[i][1])
		 {
			gameOver = true;
			alert("Game Over");
		}
	}
}
function changeDirection(e) {
	if (e.code == "ArrowUp" && speedY != 1) {
		speedX = 0;
		speedY = -1;
	}
	else if (e.code == "ArrowDown" && speedY != -1) {
		speedX = 0;
		speedY = 1;
	}
	else if (e.code == "ArrowLeft" && speedX != 1) {
		speedX = -1;
		speedY = 0;
	}
	else if (e.code == "ArrowRight" && speedX != -1) {
		speedX = 1;
		speedY = 0;
	}
}
function placeFood() {
foodX = Math.floor(Math.random() * col) * a;
foodY = Math.floor(Math.random() * row) * a;
}

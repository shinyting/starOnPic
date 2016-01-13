var can;
var ctx;

var w;
var h;

var bgPic = new Image();

function init () {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	gameloop();

	bgPic.src = "images/bg.jpg"
}

document.body.onload = init;

function gameloop () {
	window.requestAnimFrame(gameloop);
	drawBackground();
	drawPic();
}

function drawBackground () {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function drawPic () {
	ctx.drawImage(bgPic, 100, 100, 600, 400);
}
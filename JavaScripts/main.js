var can;
var ctx;

var w;
var h;

var bgPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;
var life = 0;

function init () {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	bgPic.src = "images/bg.jpg";
	starPic.src = "images/star.png";

	document.addEventListener("mousemove", mousemove, false);

	for(var i = 0; i < num; i ++) {
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}

	lastTime = Date.now();

	gameloop();
}

document.body.onload = init;

function gameloop () {
	window.requestAnimFrame(gameloop);

	//获取两次动画时间间隔
	var now = Date.now();
	deltaTime = now - lastTime;
	//获取前一次的delta之后，这次的now时间就是下一次的lastTime
	lastTime = now;

	drawBackground();
	drawPic();

	drawStars();

	aliveUpdate();
}

function drawBackground () {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function drawPic () {
	ctx.drawImage(bgPic, 100, 100, 600, 400);
}

function mousemove (e) {
	if (e.offsetX || e.layerX) {
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;
		if (px > 100 && px < 700 && py > 100 && py < 500) {
			switchy = true;
		}
		else {
			switchy = false;
		}
	}
}
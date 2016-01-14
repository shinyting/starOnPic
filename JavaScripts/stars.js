var starObj = function () {
	this.x;
	this.y;
	this.picNo;
	this.timer;

	//随机位移时所需要的速度
	this.xSpd;
	this.ySpd;
}

starObj.prototype.init = function () {
	this.x = Math.random() * 600 + 100;
	this.y = Math.random() * 400 + 100;

	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;

	this.xSpd = Math.random() * 3 - 1.5; //[-1.5, 1.5)
	this.ySpd = Math.random() * 3 - 1.5;
}
 
starObj.prototype.update = function () {
	this.x += this.xSpd * deltaTime * 0.004;
	this.y += this.ySpd * deltaTime * 0.004;

	if (this.x < 100 || this.x > 700) {
		this.init();
		return;
	}
	if (this.y < 100 || this.y > 500) {
		this.init();
		return;
	}

	this.timer += deltaTime;
	if (this.timer > 50) {
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
}

starObj.prototype.draw = function () {
	ctx.save();
	//globalAlpha全局透明度
	ctx.globalAlpha = life; //[0,1]
	//drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
	ctx.drawImage(starPic, this.picNo*7, 0, 7, 7, this.x, this.y, 7, 7);
	ctx.restore();
}

function drawStars () {
	for (var i = 0; i < num; i ++) {
		stars[i].draw();
		stars[i].update();
	}
}

function aliveUpdate () {
	if (switchy) {
		life += 0.03 * deltaTime * 0.05;
		if (life > 1) {
			life = 1;
		}
	}
	else {
		life -= 0.03 * deltaTime * 0.05;
		if (life < 0) {
			life = 0;
		}
	}
}
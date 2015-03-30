var starObj = function()
{
	this.x;
	this.y;

	this.picNo;
	this.deltaT;

	this.sx;
	this.sy;

}

starObj.prototype.init = function(){
	this.x = Math.random()*600 + 100;
	//console.log(this.x);
	this.y = Math.random()*400 + 100;

	this.picNo = Math.floor(Math.random()*7);
	this.deltaT = 0;

	this.sx = Math.random()*4 -2;
	this.sy = Math.random()*4 -2;
}

starObj.prototype.update = function()
{
	this.deltaT += deltaTime;
	//console.log(this.deltaT);
	if( this.deltaT > 50){
		this.picNo += 1;
		this.deltaT = 0;
	};
	if (this.picNo >6) {
		this.picNo = 0;
	};

	this.x += this.sx * 0.05;
	this.y += this.sy * 0.05;
	//console.log(this.x,this.y);
	if (this.x < 100 || this.x > 700) {
		this.init();
	};
	if (this.y < 100 || this.y > 500) {
		this.init();
	};
}
starObj.prototype.draw = function(){
	cxt.save();

	// console.log(switchy);
	cxt.globalAlpha = life;
	cxt.drawImage(star, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);

	cxt.restore();
}
function drawStars(){
	for (var i = 0; i < num; i++) {
		stars[i].draw();
		stars[i].update();
	};
}

function isAlive(){
	if(switchy){
		life += 0.3 * deltaTime * 0.002;
		if (life > 1) {
			life = 1;
		};
	}else{
		life -= 0.3 * deltaTime * 0.002;
		if (life < 0) {
			life = 0;
		};
	}
}
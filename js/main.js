var canvas;
var cxt;

var w;
var h;

var girlPic = new Image();
var star = new Image();

var stars = new Array();
// confirm(typeof(stars));
var num = 60;


var lastTime;
var deltaTime;

var switchy = 0;
var life = 0;
/**
 * 初始画
 * @return {[type]} [description]
 */
function init()
{
	canvas = document.getElementById("canvas");
	cxt = canvas.getContext("2d");

	w = canvas.width;
	h = canvas.height;

	document.addEventListener("mousemove",mousemove);

	girlPic.src = "./src/girl.jpg";
	star.src = "./src/star.png";

	for (var i = 0; i < num; i++) {
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	};
	//console.log(w,h,canvas.style.padding);
	lastTime = Date.now();
	//console.log(time);
	gameLoop();
}

function gameLoop()
{
	requestAnimationFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	//console.log(deltaTime);
	drawBackground();
	drawGirl();
	drawStars();
	isAlive();
}
document.body.onload = init;

function drawBackground(){
	cxt.fillStyle = "purple";
	cxt.fillRect(0, 0, w, h);
}

function drawGirl()
{
	cxt.drawImage(girlPic, 100, 100, 600, 400);
}

function mousemove(e)
{
	var px = e.offsetX == undefined ? e.layerX : e.offsetX;
	var py = e.offsetY == undefined ? e.layerY : e.offsetY;
	//console.log(px,py);

	if (px > 100 && px < 700 && py > 100 && py < 500){
		switchy = 1;
	}else{
		switchy = 0;
	}

	//console.log(switchy);
}
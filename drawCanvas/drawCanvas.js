// alert("it's working");

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// loading your sprite
var kid = new Image();
kid.src="SuccessKid.png";
// drawing sprite onto canvas
kid.onload=function(){
	ctx4.drawImage(kid, 200, 200, 50, 90);
};

var troll = new Image();
troll.src="troll.png";
// drawing sprite onto canvas
troll.onload=function(){
	ctx4.drawImage(troll, 300, 200, 50, 90);
};

var mario = new Image();
mario.src="Mario.png";
// drawing sprite onto canvas
mario.onload=function(){
	ctx4.drawImage(mario, 400, 200, 50, 90);
}



// start drawing
ctx.beginPath();
// set drawing style
ctx.strokeStyle="red";
//move your pen to the starting point
ctx.moveTo(75,0);
// drawline1
ctx.lineTo(150,75);
// drawline2
ctx.lineTo(75,150);
// drawline3
ctx.lineTo(0,75);
// draw line back to starting point
ctx.closePath();
// actually drawing
ctx.stroke();
// set fill color
ctx.fillStyle="red";
// actually fill the shape
ctx.fill();

var c2=document.getElementById("myCanvas2")
var ctx2=c2.getContext("2d")

ctx2.beginPath();
ctx2.strokeStyle="blue";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.lineTo(0,0);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="blue";
ctx2.fill();

var c3=document.getElementById("myCanvas3")
var ctx3=c3.getContext("2d")

ctx3.beginPath();
// draw circle- 5 parameters:centerx, centery, radius, 0, 6.28
ctx3.arc(150,150,30,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="blue";
ctx3.fill();

//  set up scenery
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
// Sky and land
ctx4.fillStyle = "green";
ctx4.fillRect(0,350,800,150);
ctx4.fillStyle = "cyan";
ctx4.fillRect(0,0,800,350);
ctx4.beginPath();
ctx4.arc(100,100,50,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "yellow";
ctx4.fill();

ctx4.beginPath();
ctx4.moveTo(350,350);
ctx4.lineTo(400,350);
ctx4.lineTo(450,500);
ctx4.lineTo(300,500);
ctx4.lineTo(350,350);
ctx4.closePath();
// ctx4.moveTo(370,350);
// ctx4.lineTo(370,500);
// ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="grey";
ctx4.fill();
ctx4.moveTo(375,500); 
ctx4.lineTo(375,350);
ctx4.stroke();

ctx4.fillRect(100,250,200,100);
ctx4.clearRect(130,310,20,20);
ctx4.clearRect(170,310,20,20);
ctx4.clearRect(210,310,20,20);
ctx4.clearRect(250,310,20,20);
ctx4.clearRect(130,270,20,20);
ctx4.clearRect(170,270,20,20);
ctx4.clearRect(210,270,20,20);
ctx4.clearRect(250,270,20,20);

// house
ctx4.fillRect(560,250,200,100);
// window
ctx4.clearRect(575,265,40,40);
ctx4.strokeStyle = "black"
ctx4.moveTo(595,265);
ctx4.lineTo(595,305);
ctx4.moveTo(575,285);
ctx4.lineTo(615,285);
ctx4.stroke();
// door
ctx4.fillStyle = "brown";
ctx4.fillRect(700,265,30,85)
ctx4.beginPath();
ctx4.arc(720,310,5,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "orange";
ctx4.fill();
// roof
ctx4.beginPath();
ctx4.moveTo(535,250);
ctx4.lineTo(660,200);
ctx4.lineTo(785,250);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "peru";
ctx4.fill();


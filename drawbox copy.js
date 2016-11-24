// alert("This is working");

var c =document.getElementById("mycanvas");
var ctx = c.getContext('2d');

// ctx.moveTo(0,0);
// ctx.lineTo(100,200);
// ctx.stroke();

ctx.fillStyle = "rgb(0,0,150)";
ctx.fillRect(100,100,100,100);
ctx.strokeRect(80,80,140,140);
ctx.clearRect(120,120,60,60);

var c2 =document.getElementById("mycanvas2");
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(0,0,150)";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(150,0,150,150);
ctx2.clearRect(0,150,150,150);

var c3 =document.getElementById("mycanvas3");
var ctx3 = c3.getContext('2d')
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(160,160,120,120);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(20,160,120,120);

var c4 =document.getElementById("mycanvas4");
var ctx4 = c4.getContext('2d');
ctx4.fillRect(0,0,600,600);
ctx4.clearRect(0,0,150,150);
ctx4.clearRect(300,0,150,150);
ctx4.clearRect(150,150,150,150);
ctx4.clearRect(450,150,150,150);
ctx4.clearRect(600,150,150,150);
ctx4.clearRect(0,300,150,150);
ctx4.clearRect(300,300,150,150);
ctx4.clearRect(150,450,150,150);
ctx4.clearRect(450,450,150,150);
ctx4.clearRect(600,150,150,150);






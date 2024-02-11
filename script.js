// Canvas - Snowy Cabin

// Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Sky
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 0, 500, 400);

// Moon
ctx.fillStyle = "silver";
ctx.beginPath();
ctx.arc(430, 50, 35, 0, 2 * Math.PI);
ctx.fill();

// Moon dots
ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(455, 40, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(410, 40, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(440, 55, 3, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(440, 70, 6, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(420, 60, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(430, 40, 4, 0, 2 * Math.PI);
ctx.fill();

// Snowy floor
ctx.fillStyle = "white";
ctx.fillRect(0, 330, 500, 400);

// Cabin - main shape
ctx.fillStyle = "maroon";

ctx.beginPath();
ctx.moveTo(400, 350);
ctx.lineTo(400, 200);
ctx.lineTo(200, 200);
ctx.lineTo(200, 350);
ctx.lineTo(400, 350);
ctx.fill();

// Cabin - roof
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.moveTo(180, 250);
ctx.lineTo(420, 250);
ctx.lineTo(410, 180);
ctx.lineTo(190, 180);
ctx.lineTo(180, 250);
ctx.fill();

// Cabin Sign-post: stand
ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(420, 350);
ctx.lineTo(420, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(410, 280);
ctx.lineTo(480, 280);
ctx.stroke();

// Sign-post sign
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(430, 290);
ctx.lineTo(475, 290);
ctx.lineTo(475, 325);
ctx.lineTo(430, 325);
ctx.lineTo(430, 290);
ctx.fill();

// Sign-post hangers
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(435, 280);
ctx.lineTo(435, 295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(470, 280);
ctx.lineTo(470, 295);
ctx.stroke();

// Snow on Cabin
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(270, 175, 60, 0, 1 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(325, 190, 15, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(350, 180, 30, 0, 1 * Math.PI);
ctx.fill();

// Snow for texture
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(280, 380, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(320, 380, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(400, 370, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(100, 380, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(0, 370, 60, 0, 2 * Math.PI);
ctx.fill();

// Window border
ctx.fillStyle = "silver";
ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(250, 255);
ctx.lineTo(300, 255);
ctx.lineTo(300, 300);
ctx.lineTo(250, 300);
ctx.fill();

// Window Light
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(255, 260);
ctx.lineTo(295, 260);
ctx.lineTo(295, 295);
ctx.lineTo(255, 295);
ctx.lineTo(255, 260);
ctx.fill();

// Window light puller
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(285, 260);
ctx.lineTo(285, 280);
ctx.stroke();

// Window light puller-block
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(285, 280);
ctx.lineTo(285, 286);
ctx.stroke();

// Cabin :Icicles - all start at an X of 180(minimum) of  Y of 250
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(200, 250);
ctx.lineTo(210, 250);
ctx.lineTo(205, 300);
ctx.lineTo(200, 250);
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(265, 250);
ctx.lineTo(257, 280);
ctx.lineTo(250, 250);
ctx.fill();

ctx.beginPath();
ctx.moveTo(225, 250);
ctx.lineTo(230, 250);
ctx.lineTo(227, 270);
ctx.lineTo(225, 250);
ctx.fill();

ctx.beginPath();
ctx.moveTo(310, 250);
ctx.lineTo(325, 250);
ctx.lineTo(320, 280);
ctx.lineTo(310, 250);
ctx.fill();

ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(370, 250);
ctx.lineTo(365, 280);
ctx.lineTo(350, 250);
ctx.fill();

ctx.beginPath();
ctx.moveTo(365, 250);
ctx.lineTo(380, 250);
ctx.lineTo(375, 265);
ctx.lineTo(365, 250);
ctx.fill();

ctx.fillStyle = "black";
ctx.font = "Georgia";
ctx.fillText("Proud", 440, 300);
ctx.fillText("Home", 440, 310);
ctx.fillText("Owner", 440, 320);

ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Moses Luri", 390, 390);

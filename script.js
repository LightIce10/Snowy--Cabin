// Canvas - Snowy Cabin

// Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Sky
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 0, 400, 400);

// Moon
ctx.fillStyle = "silver";
ctx.beginPath();
ctx.arc(330, 50, 35, 0, 2 * Math.PI);
ctx.fill();

// Moon dots
/* ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(355, 40, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(310, 70, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(340, 55, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(340, 70, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.arc(320, 60, 10, 0, 2 * Math.PI);
ctx.fill(); */

// Snowy floor
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(0, 330);
ctx.lineTo(0, 400);
ctx.lineTo(400, 400);
ctx.lineTo(400, 330);
ctx.lineTo(0, 330);
ctx.fill();

// Cabin - main shape
ctx.fillStyle = "maroon";
ctx.beginPath();
ctx.moveTo(400, 350);
ctx.lineTo(400, 200);
ctx.lineTo(200, 200);
ctx.lineTo(200, 350);
ctx.lineTo(400, 350);
ctx.fill();

// Cabin - top triangle
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.moveTo(180, 250);
ctx.lineTo(400, 250);
ctx.lineTo(400, 180);
ctx.lineTo(190, 180);
ctx.lineTo(180, 250);
ctx.fill();

// Window border
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(250, 254);
ctx.lineTo(300, 254);
ctx.lineTo(300, 300);
ctx.lineTo(250, 300);
ctx.fill();

// Window Light (top left)
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo();
ctx, fill();
// Window Light (top right)
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo();
ctx, fill();

// Window Light (bottom left)
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(242);
ctx.lineTo(222);
ctx, fill();

// Window Light (bottom right)
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo();
ctx, fill();
// Snowman(maybe?)

// Snow

// Snow falling(maybe?)

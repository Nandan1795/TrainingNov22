// const canvas =document.getElementById("canvas")
// const ctx = canvas.getContext("2d");

// var circle ={
//     x:100,
//     y:100,
//     r:30,
//     dx:5,
//     dy:4
// }

// function DrawCircle (){
//     ctx.fillStyle ="red"
//     ctx.beginPath()
//     ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2)
//     ctx.fill()

// }


// function update(){
// ctx.clearRect(0,0,canvas.width,canvas.height)
//     DrawCircle()
// circle.x += circle.dx
// circle.y += circle.dy
//     requestAnimationFrame(update)

//     if(circle.x+circle.r>canvas.width || circle.x-circle.r<0){
//         circle.dx *=-1
//     }
//     if(circle.y+circle.r>canvas.height || circle.y-circle.r<0){
//         circle.dy *=-1
//     }
// }

// update()


// selector
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const image = document.getElementById("source");
const image1 = document.getElementById("imgsource");

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(image1,0,0,canvas.width,canvas.height)
var mainPlayer = ctx.drawImage(image, player.x, player.y, player.w, player.h);
  ctx.fillStyle ="red"
  var distraction = ctx.fillRect(100,100,50,50)
}

function clear() {
    // if()
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}
// Create Animation
function update() {
  clear();

  drawPlayer();

  newPos();

  requestAnimationFrame(update);

}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

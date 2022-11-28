
var bg, bgImage;
var mario, mario_running;
var ground;
var brick, brickImage, brickGroup;
var coin, coinGroup, coin_running;
var coinScore = 0

var mushObstacleImage, turtleObstacleImage, obstaclesGroup;
var gameState = "PLAY";
var mario_collided;

var restartImg;

// load all assets in the memory
function preload() {
  bgImage = loadImage("./images/bgnew.jpg");
  mario_running = loadAnimation(
    "./images/mar1.png",
    "./images/mar2.png",
    "./images/mar3.png",
    "./images/mar4.png",
    "./images/mar5.png",
    "./images/mar6.png",
    "./images/mar7.png"
  );
  coin_running = loadAnimation(
    "./images/con1.png",
    "./images/con2.png",
    "./images/con3.png",
    "./images/con4.png",
    "./images/con5.png",
    "./images/con6.png"

  );
  brickImage = loadImage('./images/brick.png')

  mushObstacleImage = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  turtleObstacleImage = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );

  mario_collided = loadAnimation("images/dead.png");

  restartImg = loadImage("images/restart.png");

}
// Setting up the game objects (Location and Sizes)
function setup() {
  createCanvas(1000, 600)
  bg = createSprite(600, 300)
  bg.addImage(bgImage)
  bg.scale = .4

  mario = createSprite(200, 470)
  mario.addAnimation("mario_running", mario_running)
  mario.scale = .2

  ground = createSprite(200, 520, 400, 1);

  brickGroup = new Group()
  coinGroup = new Group()
  obstaclesGroup = new Group()

  mario.addAnimation("collided", mario_collided)

  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;
}
// It will draw and redraw the Objects
function draw() {
  drawSprites();
  if (gameState == "PLAY") {
    // background("black")
    bg.velocityX = -4
    if (bg.x < 250) {
      bg.x = bg.width / 8
      // console.log(bg.x)
    }

    if (keyDown("space")) {
      mario.velocityY = -10;

      // Mario Jump Sound
      // jumpSound.play();
    }
    mario.velocityY = mario.velocityY + 0.5;
    mario.collide(ground);
    ground.visible = false;

    generateBricks()
    for (var i = 0; i < brickGroup.length; i++) {
      var temp = brickGroup.get(i);
      // debugger
      // console.log(temp)
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }

    // Mario Issue
    if (mario.x < 200) mario.x = 200;
    if (mario.y < 50) mario.y = 50;

    generateCoins()

    for (var i = 0; i < coinGroup.length; i++) {
      var temp = coinGroup.get(i);
      // debugger
      // console.log(temp)
      if (temp.isTouching(mario)) {
        // mario.collide(temp);
        coinScore++;
        temp.destroy();

        // temp = null;


      }

    }

   

    generateObstacles()

    if (obstaclesGroup.isTouching(mario)) {
      gameState = "END";
    }
  }

  else if (gameState == "END") {

    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstaclesGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);


    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      
      restartGame();
    }
  }

   // Score Card
   textSize(20);
   fill("brown");
   text("Coins Collected: " + coinScore, 500, 50);
}
function generateBricks() {
  if (frameCount % 70 == 0) {
    brick = createSprite(1200, 120);
    brick.addImage(brickImage);
    brick.y = random(50, 350)
    brick.scale = .5;
    brick.velocityX = -5;
    brickGroup.add(brick)
  }
}

function generateCoins() {
  if (frameCount % 70 == 0) {
    // console.log(frameCount);
    coin = createSprite(1300, 200);
    coin.addAnimation("running_coin", coin_running)
    coin.scale = 0.2;
    coin.y = random(50, 350)
    coin.velocityX = -5;
    coinGroup.add(coin)

  }
}

function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 520, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushObstacleImage);
        break;
      case 2:
        obstacle.addAnimation("turtle", turtleObstacleImage);
        break;
      default:
        break;
    }
    obstaclesGroup.add(obstacle);
  }
}

function restartGame() {
  gameState = "PLAY";
  mario.changeAnimation("running", mario_running);
  mario.scale = 0.2;
  coinScore = 0;
  restart.visible = false;
}
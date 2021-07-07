var seaimg;
var shipimg1;
function preload() {
  seaimg = loadImage("sea.png");
  shipimg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup() {
  createCanvas(900, 600);

  sea = createSprite(400, 400, 800, 400);
  sea.addImage("sea", seaimg);
  sea.scale = 0.5;
  sea.x = sea.width/2 -1100;

  ship = createSprite(600, 550, 200, 200);
  ship.addAnimation("sailing", shipimg1);
  ship.scale = 0.1;
}

function draw() {
  background("white");

  sea.velocityX = -5;
  
  //Code to reset the background
  if (sea.x < -150) {
    sea.x = sea.width/2 -1100;
  }
  
  console.log(sea.width)
  drawSprites();
}
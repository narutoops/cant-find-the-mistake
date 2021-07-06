var seaImg;
var shipImg1,shipfloating;



function preload(){
seaImg=loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  seaImg=createSprite(200,200);
  seaImg.addImage(seaImg);
  seaImg.velocityX = 4;

  shipImg1=createSprite(70,580,20,20);
  shipImg1.addAnimation("shipfloating",shipImg);
  shipImg1.scale=0.08;
}

function draw() {

  background("blue");
if (sea.x < 0){
  sea.x = sea.width/2;
}
}


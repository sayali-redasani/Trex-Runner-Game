
var trex, trex_running;
var ground, groundImage

//preload is a pre-defined function 
function preload(){
  trex_running =  loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex =  createSprite(50, 160, 50, 50)
  trex.addAnimation("running", trex_running)
  trex.scale =  0.7;

  //create ground sprite
  ground = createSprite(200, 180, 400, 15);
  ground.addImage(groundImage)
  ground.velocityX= -3

 
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY  = -12;
  }

  //gravity
  trex.velocityY = trex.velocityY + 0.8;


  if(ground.x < 0){
    ground.x =  ground.width/2
  }

  trex.collide(ground)
  drawSprites();
  

}

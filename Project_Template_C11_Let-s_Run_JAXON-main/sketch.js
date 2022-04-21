
var path,pathimg,leftBoundary,rightBoundary
var runner,runnerimg
function preload(){
  //pre-load images
   pathimg=loadImage("path.png");
   runnerimg=loadAnimation("Runner-1.png","Runner-2.png")
  }

function setup(){
  createCanvas(400,400);
  //create sprites here

 path=createSprite(200,200);
 path.addImage(pathimg);
 path.velocityY=2;
 path.scale=1.2;

runner=createSprite(200,340);
runner.scale=0.1;
runner.addAnimation("running",runnerimg);

leftBoundary=createSprite(0,0,20,800);
leftBoundary.visible=false;

rightBoundary=createSprite(400,0,20,800);
rightBoundary.visible=false;;

}

function draw() {
  background(100);
 
  runner.x=World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);





 if(path.y>400){
   path.y=height/2;
 }
 
  drawSprites();
}

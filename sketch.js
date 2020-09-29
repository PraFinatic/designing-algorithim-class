var fixedRectangle,movingRectangle

function setup() {
  createCanvas(800,400);
  movingRectangle=createSprite(400, 200, 80, 30);
  fixedRectangle=createSprite(200,300,60,80);
  movingRectangle.shapeColor="green";
  movingRectangle.debug=true;
  fixedRectangle.shapeColor="green";
  fixedRectangle.debug=true;
}

function draw() {
  background(255,255,255); 
  //console.log(movingRectangle.x-fixedRectangle.x);
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if (movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+
    movingRectangle.width/2&&fixedRectangle.x-movingRectangle.x<
    movingRectangle.width/2+fixedRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2+
    movingRectangle.width/2&&fixedRectangle.y-movingRectangle.y<
    movingRectangle.width/2+fixedRectangle.width/2) {  
    movingRectangle.shapeColor="red"
    fixedRectangle.shapeColor="red"
  } else {
    movingRectangle.shapeColor="green"
    fixedRectangle.shapeColor="green"
  
  }
  drawSprites();
}

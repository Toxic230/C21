var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  box1 = createSprite(100, 100, 50, 50);
  box1.shapeColor = "green";
  box2 = createSprite(200, 100, 50, 50);
  box2.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, box1)){
    movingRect.shapeColor = "blue";
    box1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    box1.shapeColor = "green";
  }
  drawSprites();
}


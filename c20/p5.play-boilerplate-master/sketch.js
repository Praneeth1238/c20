var a,b,c;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  a = createSprite(400,200,100,100);
  b = createSprite(700,200,50,50);
  c = createSprite(400,100,50,50);
  c.velocityY = 2;

}

function draw() {
  background("green");
  
  b.y = World.mouseY;
  b.x = World.mouseX;
  
  if(b.x-a.x<=a.width/2+b.width/2&&a.x-b.x<=a.width/2+b.width/2&&
    a.y-b.y<=a.height/2+b.height/2&&b.y-a.y<=a.height/2+b.height/2){
      a.shapeColor = "red";
      b.shapeColor = "red";
    }
    else{
      a.shapeColor = "blue";
      b.shapeColor = "blue";
    }
    if(c.x-a.x<=a.width/2+c.width/2&&a.x-c.x<=a.width/2+c.width/2){
      c.velocityX = c.velocityX*(-1);
    }
    if(a.y-c.y<=a.height/2+c.height/2&&c.y-a.y<=a.height/2+c.height/2){
      c.velocityY = c.velocityY*(-1);
    }
  drawSprites();
}
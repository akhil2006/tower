const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var platform,block1,block2,block3,block4,block4,block5,block6,block7,block8,block9,slingg,polygon21;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
platform = new Ground(400,300,300,20);
box1 = new Box (340,255,30,40);
box2 = new Box (385,215,30,40);
box3 = new Box (420,200,30,40);
box4 = new Box(445,230,30,40)
box5 = new Box (475,225,30,40);
box6 = new Box (365,185,30,40);
box7 = new Box (395,175,30,40);
box8 = new Box (405,195,30,40)
blox9 = new Box (370,145,30,40);
quad1 = Bodies.circle(50,200,20);
World.add(world,quad1);
slingg = new SlingShot (this.quad1,{x:100 , y:200 });
}

function draw() {
  background("red");  
  Engine.update(engine);
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  bboxss9.display();
  slingg.display();
  ellipseMode(RADIUS);
  ellipse(this.polygon21.position.x,this.polygon21.position.y,20,20)
  drawSprites();
}
function mouseDragged () {
  Matter.Body.setPosition(this.polygon21, {x:mouseX , y:mouseY});
}

function mouseReleased(){
  slingg.fly();
}
function keyPressed(){
if(keyCode === 32){
slingg.attach(this.polygon21);
}
}
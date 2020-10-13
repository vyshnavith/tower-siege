const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, box1, box2, box3, box4, box5, box6, box7, box8, box9, polygon, slingshot;
var ground2, box10, box11,box12, box13, box14, box15, box16, box17, box18, box19;
var score = 0

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(300,300,200,5);
  //level 1
  box1 = new Box(300,270,30,30);
  box2 = new Box(270,270,30,30);
  box3 = new Box(330,270,30,30);
  box4 = new Box(240,270,30,30);
  box5 = new Box(360,270,30,30);
  //level 2
  box6 = new Box(300,250,30,30);
  box7 = new Box(270,250,30,30);
  box8 = new Box(330,250,30,30);
  //level 3
  box9 = new Box(300,230,30,30);
  ground2 = new Ground(600,300,200,5);
  //level 1
  box10 = new Box(600,270,30,30);
  box12 = new Box(570,270,30,30);
  box13 = new Box(630,270,30,30);
  box14 = new Box(540,270,30,30);
  box15 = new Box(660,270,30,30);
  //level 2
  box16 = new Box(600,250,30,30);
  box17 = new Box(570,250,30,30);
  box18 = new Box(630,250,30,30);
  //level 3
  box19 = new Box(600,230,30,30);
  //polygon
  polygon = new Paper(100,100,40);
  slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw() {
  background(0); 
  Engine.update(engine)
  strokeWeight(4);
    fill("white");
    textSize(40);
    text("score"+score,600,100);
  polygon.display();
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
ground2.display();
box10.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon.body);
  }
}
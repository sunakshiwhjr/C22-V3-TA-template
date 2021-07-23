const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball, ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;



  ellipseMode(RADIUS);
  rectMode(CENTER);
  
}

function draw() 
{
  background(51);

  Engine.update(myEngine);


}
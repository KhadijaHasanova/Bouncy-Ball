const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;

function setup() {
  createCanvas(400,400);

  //creating a physics engine
  engine = Engine.create();
  //create a world using the physics engine created
  world = engine.world;

  var options = {
    isStatic : true
  }
  //creating ground 
  ground =  Bodies.rectangle(200,390, 200, 20,options);
  //add the ground to the world
  World.add(world, ground);
  
  console.log(ground);

  var ball_options = {
    restitution: 0.8
  }
  //creating the ball
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("blue");
  stroke("white");
  strokeWeight(4);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  drawSprites();
}
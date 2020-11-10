
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = matter.constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = Bodies.rectangle (width/2,50,800,10)
	World.add(world,roof)

bob1 = new bob (200,550,20)
bob2 = new bob (300,550,20)
bob3 = new bob (400,550,20)
bob4 = new bob (500,550,20)
bob5 = new bob (600,550,20)

rope1 = new rope (bob1.body,roof.body)
rope2 = new rope (bob2.body,roof.body)
rope3 = new rope (bob3.body,roof.body)
rope4 = new rope (bob4.body,roof.body)
rope5 = new rope (bob5.body,roof.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (KEYGOESDOWN ("UP ARROW"))
  bob1.body.isStatic = false
  drawSprites();
 
}




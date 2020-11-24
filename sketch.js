
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,20);
	  bottomdustbin = new dustbin(600,590,200,20);
	  sidedustbin1 = new dustbin(690,500,20,200);
	  sidedustbin2 = new dustbin(520,500,20,200);
	  paper = new Paper(100,550);
	//Create the Bodies Here.
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bottomdustbin.display();
  sidedustbin1.display();
  sidedustbin2.display();
  ground.display();
   paper.display();
   image(dustbinImg,490,350,220,250);
   

  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-70});
}



}





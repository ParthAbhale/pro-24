
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var paper = new Paper(200,690,70);
	var dustbin = new Dustbin(600,690,100,10)
	var dustbin2 = new Dustbin(600,690,10,100)
	var dustbin3 = new Dustbin(620,690,10,100)
	
	var ground = Matter.Bodies.rectangle(0,696,width,15);
    

	Engine.run(engine);
  
}


function draw() {
  
  background("blue");
  Engine.update(engine);

   paper.display();
   dustbin.display();
   dustbin2.display();
   dustbin3.display();

   KeyPressed();
}
function KeyPressed()
{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



var d1, d2, d3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var d11, d22, d33;

function setup() {
	createCanvas(1700, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700, 630, 1700, 15);

	paper = new Paper(150,550,30);

	d1 = createSprite(1350,545,20,135);
	d1.shapeColor="white";
	d11 = new Dustbin(1350,545,20,135);

	d2 = createSprite(1240,610,220,20);
	d2.shapeColor="white";
	d22 = new Dustbin(1240,610,220,20);

	d3 = createSprite(1130,545,20,135);
	d3.shapeColor="white";
	d33 = new Dustbin(1130,545,20,135);

	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  
	ground.display();
	paper.display(); 
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
	
}

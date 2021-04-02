var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,backgroundIMG,bg,bm
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG=loadImage("background.jpg")
    bm = loadSound("Piano.mp3")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bg=createSprite(400,350,50,50)
	bg.addImage(backgroundIMG)
    bm.play()

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground


 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("black");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("black");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("black");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyCode === 37){
	helicopterSprite.position.x=helicopterSprite.position.x-10
	Matter.Body.translate(packageBody,{x:-10,y:0})
	
  }

  if(keyCode === 39){
	helicopterSprite.position.x=helicopterSprite.position.x+10
	Matter.Body.translate(packageBody,{x:10,y:0})
	
  }
  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
  }
  
  
  drawSprites();
  
  
 
}

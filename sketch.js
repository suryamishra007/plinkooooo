var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisions = [];
var plinkos = [];

var score = 0;
var particle;
var turn = 0;



var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //t = new Ground(400,500,20,20)


   for (var k = 0; k <=width; k = k + 160) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,100));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,150));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,200));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,250));
    }
    for (var j = 75; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,300));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,350));
    }
    for (var j = 75; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,400));
    }

    

    
}
 


function draw() {
  background("black");

  

  textSize(20)
 text("Score : "+score,20,30);


 text("500",100,600);
 text("200",250,600);

 text("100",400,600);

 text("200",575,600);
 text("500",750,600);

 

  Engine.update(engine);
 

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if(turn>5)
{
   gameState = "end";
}

   if(particle&&gameState!=="end")
 {
   
   particle.display();
   if(particle.body.position.y>600)
   {console.log("hello")
     if(particle.body.position.x>0&&particle.body.position.x<160)
     {
       score = score+500;
       
     }
     else if(particle.body.position.x>160&&particle.body.position.x<320)
     {
       score = score+200;
     }
     else if(particle.body.position.x>320&&particle.body.position.x<480)
     {
       score = score+100;
       
     }
     else if(particle.body.position.x>480&&particle.body.position.x<640)
     {
       score = score+200;
     }
     else if(particle.body.position.x>640&&particle.body.position.x<800)
     {
       score = score+500;
     }
     particle = null;
   }
 }
 if(gameState === "end")
 {
    textSize(100)
    fill("yellow")
    text("GAME OVER",120,400)
 }

}
function mousePressed()
{
   if(gameState!="end")
   {
      if(particle===undefined||particle===null)
      {
         particle = new Particle(mouseX, 10, 10)
         turn = turn+1
      }
   }
}
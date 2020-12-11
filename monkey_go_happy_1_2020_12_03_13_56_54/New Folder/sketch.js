
PLAY = 0;
END = 0;
gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var ground,invisibleground;
var foodGroup, obstacleGroup;
var survivaltime;
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,390,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
 invisibleground = createSprite(400,450,900,10);
  invisibleground.x = invisibleground.width/2;
  invisibleground.velocityX = -4;
  invisibleground.visible = false;
  
}


function draw() {
background("white");
  banana();
  obstacle();
 if(ground.x<0){
   ground.x = ground.width/2;
    }
  
   if(keyDown("space") ){
     monkey.velocityY = -12;
   }
   
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
   
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  
  drawSprites();
  text("Survival Time:",survivaltime,30,150);
}

function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(500,10,10,20);
    banana.addImage("banana",bananaImage);
    banana.velocityX = -4;
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    foodGroup.add(banana);
    foodGroup.setLifetimeEach(-1);
    
  }
    
}
 function obstacle(){
   if(frameCount % 300 === 0){
     var stone = createSprite(500,360,20,30);
     stone.addImage("obstacle",obstacleImage);
     stone.velocityX = -4;
     obstacleGroup.add(stone);
     obstacleGroup.setLifetimeEach(-1);
     stone.scale = 0.2;
   }
 }




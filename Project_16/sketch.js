
var monkey , monkey_running
var banana ,bananaImage;

var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

var ground, invisibleGround;

var score;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(800, 400);
  
  monkey = createSprite(100, 300, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
  // banana = createSprite(200, 200, 10, 10);
  // banana.addImage(bananaImage);
  // // banana.scale = 0.2;
  
  // obstacle = createSprite(400, 200, 10, 10);
  // obstacle.addImage(obstacleImage);
  // obstacle.scale = 0.2;
  
  ground = createSprite(400, 300, 800, 20);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
  // ground.debug = true;
}


function draw() {
  background("white");
  
  fill("black");
  textSize(20);
  text("Survival Time: "+ score, 200,50);
  
  score = score + Math.round(frameCount/80);
  
   if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnFood();
  
  spawnObstacles();
  
  drawSprites();
}


function spawnFood() {
  //write code here to spawn the food
   if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
     
    FoodGroup.add(banana);
    
    }
}

function spawnObstacles() {
  //write code here to spawn the obstacles
   if (frameCount % 300 === 0) {
    obstacle = createSprite(600,258,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 155;
     
    obstacleGroup.add(obstacle);
    }
}









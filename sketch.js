var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();


ghost = createSprite(300,300);
ghost.addImage(ghostImg);
ghost.scale = 0.3;





}

function draw() {
  background(200);

  if(gameState === "play"){
    if(tower.y > 400){
      tower.y = 300

    }

if(keyDown("space")){
ghost.velocityY = -10   
}

ghost.velocityY = ghost.velocityY + 0.6

if(keyDown(LEFT_ARROW)){
  ghost.x = ghost.x - 3 ;  
  }

  if(keyDown(RIGHT_ARROW)){
    ghost.x = ghost.x  + 3  ; 
    }

if(climbersGroup.isTouching(ghost)){
ghost.velocityY = 0;

}

if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
ghost.destroy();
gameState = "end";


}




spawndoor();
drawSprites();
  }



if(gameState === "end"){
stroke("black");
  fill('red');
  textSize(30);
  text("GAMEOVER",220,300);





}


  



}

function spawndoor(){
if(frameCount % 350 === 0){
door = createSprite(200,-50);
door.x = Math.round(random(100,450));
door.addImage(doorImg);
door.velocityY = 1;
door.lifetime = 700;
 doorsGroup.add(door);

 climber = createSprite(200,10);
climber.x = door.x
climber.addImage(climberImg);
climber.velocityY = 1;
climber.lifetime = 700;
climbersGroup.add(climber);

invisibleBlock= createSprite(200,15);
invisibleBlock.x = door.x
//invisibleBlock.addImage(climberImg);
invisibleBlock.velocityY = 1;
invisibleBlock.lifetime = 700;
invisibleBlocksGroup.add(climber);
invisibleBlock.debug = true;





ghost.depth = door.depth;
ghost.depth = ghost.depth + 1;

ghost.depth = climber.depth;
ghost.depth = ghost.depth + 1;





}





}




















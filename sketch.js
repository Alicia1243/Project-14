var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  score.textSize = 20;
  score.text("Number of points" + score, 25, 15);
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2)
    {
    blueBalloon();
    }
    else if(select_balloon == 3)
    {
    greenBalloon();
    }
    else if(select_balloon == 4)
    {
    pinkBalloon();
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  blue_balloonImage = createSprite(Maths.round(random(3, 397)), Maths.round(random(397, 3)), 5, 10);
  blue_balloonImage.addImage(blue_balloonImage);
  blue_balloonImage.scale = 3.67;
  blue_balloonImage.velocityY = 5;
  blue_balloonImage.destroy = 135;
}

function greenBalloon() {
  green_balloonImage = createSprite(Maths.round(random(3, 397)), Maths.round(random(397, 3)), 5, 10);
  green_balloonImage.addImage(green_balloonImage);
  green_balloonImage.scale = 1.56;
  green_balloonImage.velocityX = 8;
  green_balloonImage.destroy = 167;
}

function pinkBalloon() {
  pink_balloonImage = createSprite(Maths.round(random(3, 397)), Maths.round(random(397, 3)), 5, 10);
  pink_balloonImage.addImage(pink_balloonImage);
  pink_balloonImage.scale = 2.43;
  pink_balloonImage.velocityY = 1;
  pink_balloonImage.destroy = 45;
}

var catImg1, catImg2, catImg3, catImg4, cat;
var mouseImg1, mouseImg2, mouseImg3, mouseImg4, mouse;
var background, bgImg;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(500, 400,1000, 800)
    cat = createSprite(400, 800, 50, 50);
    cat.debug = true;
    mouse = createSprite(400, 200, 50, 50);
    mouse.debug = true;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(isTouching(mouse)){
        mouse.destroy();
      }
    
      isTouching();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

   if (keyCode === LEFT_ARROW){
       cat.addAnimation("catWalking", catImg2);
       cat.changeAnimation("catWalking");
       cat.velocityX = 2
   }
}

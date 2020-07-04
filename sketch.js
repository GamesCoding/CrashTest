var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  rectMode(CENTER);

  car=createSprite(50,200,50,50);
  car.shapeColor=("white");

  wall=createSprite(1300,200,60, height/2);
}

function draw() {
  background(0);
  
  car.velocityX = speed;

  if (wall.x - car.x < (car.width+wall.width)) {
    car.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22500;

    if (deformation<100) {
      car.shapeColor=("green");
    }

    if(deformation>100 && deformation<180) {
      car.shapeColor=("yellow");
    }

    if(deformation>180) {
      car.shapeColor=("red");
    }
  }
  
  drawSprites();
}
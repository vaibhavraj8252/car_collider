var car, wall;
var speed,weight;
var def;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(750,200,20,200);
  speed=random(55,90);
weight=random(400,1200);
car.velocityX=speed;
console.log("if car's colour is green then collision rate is good")
console.log("if car's colour is yellow then collision rate is average")
console.log("if car's colour is red then collision rate is lethal")}

   
  

function draw() {
  background("white");  
  drawSprites();
  
  text("if car's colour is green then collision rate is good",100,50);
  text("if car's colour is yellow then collision rate is average",100,70);
  text("if car's colour is red then collision rate is lethal",100,90);
  
  collide();
  
}

function collide(){
  
  if(car.x-wall.x<=45&&wall.x-car.x<=35){
    if(def<1500000){
      car.shapeColor="green";
    }
    if(def<2000000&&def>1500000) {
      car.shapeColor="yellow";
    }
    if(def>2000000){
      car.shapeColor="red";
    }
  def=(0.5*speed*speed*weight)||22500;car.velocityX=0;
car.x=725}
}
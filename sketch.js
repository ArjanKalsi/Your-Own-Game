const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var rope
var rope2

var background;
var button,button2

function preload(){
  background = loadImage('background.jfif');
  ball = loadImage('ball.png');
  crane = loadImage('crane.png');

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  crane = createImg('crane.png');
  crane.position(100,100);
  crane.size(500,500)

  button = createImg('cut.png');
  button.position(485,210);
  button.size(50,50);
  button.mouseClicked(drop);

  button2 = createImg('cut.png');
  button2.position(800,210);
  button2.size(50,50);
  button2.mouseClicked(drop2);
 
  rope = new Rope(7,{x:150,y:90});
  rope2 = new Rope(7,{x:410,y:90});
 
  ground = new Ground(250,height,width,20);
  blink.frameDelay = 20;

  crane = createSprite(371,325,100,100);
  crane.scale = 0.2;
  
  ball = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,ball);

  fruit_con = new Link(rope,ball);
  fruit_con_2 = new Link(rope2,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw(){
  background(51);
  image(background,0,0,width,height);

  rope.show();
  rope2.show();

  Engine.update(engine);
  ground.show();

  drawSprites();
}

function drop(){
  rope.break();
}

function drop2(){
  rope2.break();
}

function collide(body,sprite){
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}
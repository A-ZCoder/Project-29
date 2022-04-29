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


var backgroundImg, leftcliffImg, rightcliffImg, rockImg;

var leftcliff, rightcliff, rope;
var jointPoint, jointLink;


var rocks = []

function preload() {
backgroundImg = loadImage("./assets/forest.jpg");
}


function setup() {
createCanvas(windowWidth-5, windowHeight-5)
engine = Engine.create()
world = engine.world

leftcliff = new Lcliff(width/2-607, height/2, 220,200)
rightcliff = new Rcliff(width/2+695, height/2-75, 350,275)

rope = new Rope(31, {x : width/2-690, y : height/2-60})
jointPoint = new Lcliff(width/2-607, height/2, 50,50)
jointPoint = new Rcliff(width/2+655, height/2-80, 50,50)
Matter.Composite.add(rope.body, jointPoint)
jointLink = new Link(rope, jointPoint)


for (var i = 0; i <= 5; i++) {
    var x = random(width / 2 - 450, width / 2 + 500);
    var y = random(-10, 140);
    var rock = new Rock(x, y, 120, 120);
    rocks.push(rock);
  }

  
}


function draw() {
background(backgroundImg)

Engine.update(engine)
leftcliff.display()
rightcliff.display()
rope.display()


for (var rock of rocks) {
    rock.display();
  }
}

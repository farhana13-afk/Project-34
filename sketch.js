const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function setup() {
  createCanvas(windowWidth/2.5, windowHeight/2);
  engine = Engine.create();
  world = engine.world;
 
  /*let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options ={
    mouse:canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world, mConstraint); */

  //bob
  bob1 = new Bob(200,350, "red");
  bob2 = new Bob(300,350, "orange");
  bob3 = new Bob(400,350, "green");
  bob4 = new Bob(500,350, "blue");
  bob5 = new Bob(600,350, "violet");
  
  //sling 
  sling1 = new Wire(bob1.body, {x: 200, y:50});
  sling2 = new Wire(bob2.body, {x: 300, y:50});
  sling3 = new Wire(bob3.body, {x: 400, y:50});
  sling4 = new Wire(bob4.body, {x: 500, y:50});
  sling5 = new Wire(bob5.body, {x: 600, y:50});

}

function draw() {
  background("black");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});

}
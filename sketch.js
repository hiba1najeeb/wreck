const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint =Matter.Constraint;

var engine,world;
var ground;
var b1,b2
var bg;

var particles = []
var divisions = []
var plinkos = []
function preload(){
bg = loadImage("123.png")
}
function setup() {
  createCanvas(1400,600);

   engine= Engine.create();
  world = engine.world;
  ball = new Ball (340,500,70)
ground= new Ground (width/2,595,1400,10)
b1 = new Box (700,565,90,40)
b2 = new Box (700,525,90,40)

b3= new Box (700,485,90,40)
b4 = new Box (700,445,90,40)

b5= new Box (700,405,90,40)
b6 = new Box (700,365,90,40)

b7= new Box (700,325,90,40)
b8 = new Box (700,285,90,40)

b9= new Box (700,245,90,40)
b10 = new Box (700,205,90,40)

b11= new Box (700,165,90,40)
b12 = new Box (700,125,90,40)

l1 = new Box (795,565,90,40)
l2 = new Box (795,525,90,40)

l3= new Box (795,485,90,40)
l4 = new Box (795,445,90,40)

l5= new Box (795,405,90,40)
l6 = new Box (795,365,90,40)

l7= new Box (795,325,90,40)
l8 = new Box (795,285,90,40)

l9= new Box (795,245,90,40)
l10 = new Box (795,205,90,40)

l11= new Box (795,165,90,40)
l12 = new Box (795,125,90,40)

a1 = new Box (890,565,90,40)
a2 = new Box (890,525,90,40)
a3 = new Box (890,485,90,40)
a4 = new Box (890,445,90,40)
a5 = new Box (890,405,90,40)
a6 = new Box (890,365,90,40)
a7 = new Box (890,325,90,40)
a8 = new Box (890,285,90,40)
a9 = new Box (890,245,90,40)
a10 = new Box(890,205,90,40)
a11 = new Box(890,165,90,40)
a12 = new Box(890,125,90,40)

d1 = new Box (985,565,90,40)
d2 = new Box (985,525,90,40)
d3 = new Box (985,485,90,40)
d4 = new Box (985,445,90,40)
d5 = new Box (985,405,90,40)
d6 = new Box (985,365,90,40)
d7 = new Box (985,325,90,40)
d8 = new Box (985,285,90,40)
d9 = new Box (985,245,90,40)
d10 = new Box (985,205,90,40)
d11 = new Box (985,165,90,40)
d12 = new Box (985,125,90,40)

h1 =new Box(1080,565,90,40)
h2 =new Box(1080,525,90,40)
h3 =new Box(1080,485,90,40)
h4 =new Box(1080,445,90,40)
h5 =new Box(1080,405,90,40)
h6 =new Box(1080,365,90,40)
h7 =new Box(1080,325,90,40)
h8 =new Box(1080,285,90,40)
h9 =new Box(1080,245,90,40)
h10 =new Box(1080,205,90,40)
h11 =new Box(1080,165,90,40)
h12 =new Box(1080,125,90,40)
rope = new Rope (ball.body,{x:320,y:115})
}



function draw() {
  background(bg); 
  
  Engine.update(engine)
  rope .display();
  ball.display()

ground.display();

 b1.display();
 b2.display();
 b3.display()
   b4.display()
   b5.display()
   b6.display()
   b7.display()
   b8.display()
   b9.display()
   b10.display()
   b11.display()
   b12.display()

     l1.display();
     l2.display();
     l3.display()
     l4.display()
     l5.display()
     l6.display()
     l7.display()
     l8.display()
     l9.display()
     l10.display()
     l11.display()
     l12.display()
     a1.display()
     a2.display()
     a3.display()
     a4.display()
     a5.display()
     a6.display()
     a7.display()
     a8.display()
     a9.display()
     a10.display()
     a11.display()
     a12.display()

     d1.display()
     d2.display()
     d3.display()
     d4.display()
     d5.display()
     d6.display()
     d7.display()
     d8.display()
     d9.display()
     d10.display()
     d11.display()  
     d12.display()

     h1.display()
     h2.display()
     h3.display()
     h4.display()
     h5.display()
     h6.display()
     h7.display()
     h8.display()
     h9.display()
     h10.display()
     h11.display()
     h12.display()
}
function mouseDragged (){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  Matter.Body.setVelocity(ball.body,ball.body.position,{x:1500,y:-1500});
  }
  function mouseReleased () {
    
    Matter.Body.setVelocity(ball.body,ball.body.position,{x:1500,y:-1500});
    }








class Box{
constructor (x,y,w,h){
var options = {
 
    restitution : 0.3,
    friction :1,
    density :1.2
   
}
this.body = Bodies.rectangle (x,y,w,h,options)
this.w =w;
this.h =h;
World.add (world,this.body)


}

display(){
   
    var pos = this.body.position;
    var angle = this.body.angle;
    push ()
    fill ("maroon")
    stroke ("white")
    translate(pos.x,pos.y)
    rotate (angle)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop ()
    
}


}
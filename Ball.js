class Ball{

    constructor(x,y,r){

        var options = {
            speed:100,
            'restitution':0.3,
            'friction':1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
     


        World.add(world,this.body);
    }
    
    display(){

        var pos = this.body.position;

        push ()
       translate(pos.x,pos.y);
       rectMode(CENTER)
       strokeWeight(1)
       fill ("silver");
       ellipseMode(RADIUS)
       ellipse(0,0,this.r,this.r)
       
     
        pop ()


    }
}
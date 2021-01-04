class Bob{
    constructor(x,y,color){
 var options= {
    'restitution':1,
    'friction':0,
    'frictionAir':0.0,
    "slop":1,
    'inertia': Infinity
 }
 this.body=Bodies.circle(x,y,50, options);
 this.radius= 35;
 this.x = x;
 this.y = y;
 this.color=color;
 World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push ();
    translate(pos.x, pos.y)
    rotate (angle);
    noStroke();
    fill (this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius);
    pop ();
}
}
class Wire{
    constructor(bodyA, pointB){
var options={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 1,
    angularStiffness: 1,
    length: 220
}
this.pointB = pointB
this.pointX = bodyA.x;
this.pointY =bodyA.y-250;
this.wire = Constraint.create(options);
World.add(world, this.wire);
}
display(){
  if(this.wire.bodyA){
    var pointA = this.wire.bodyA.position;
    var pointB = this.pointB; 
    push ();
        strokeWeight(3.5);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
    pop ();
    }  
  }
}
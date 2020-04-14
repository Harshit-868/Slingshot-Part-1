class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      'bodyA': bodyA,
      'pointB': pointB,
      'length': 0.5,
      'stiffness': 0.035
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  release() {
    if (flag == "loading") {
      this.sling.bodyA = null;
      flag = "launched";
    }
  }

  display() {
    if(this.sling.bodyA && flag == "ready" || flag == "loading"){
      var pointA = this.sling.bodyA.position;
      var pointB = this.sling.pointB;
      strokeWeight(4);
      stroke("white");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
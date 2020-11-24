class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      
    this.radius = 20;

      
      World.add(world, this.body);
      this.image = loadImage("paperImage.png");
     
    }
    display(){
      var pos =this.body.position;
      
      
      push();
      imageMode(CENTER);
      fill("red");
      ellipseMode(RADIUS);
      stroke("green")
      image(this.image,pos.x,pos.y,40,40);
      pop();
    }
  };
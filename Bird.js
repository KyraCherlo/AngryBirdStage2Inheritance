class Bird extends BaseClass {
    constructor(x, y) { // parent class is known as super in child
      super(x,y,50,50);
      this.image= loadImage("sprites/bird.png");
    } 

    display(){ // function overriding
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();
    } 
  }
  
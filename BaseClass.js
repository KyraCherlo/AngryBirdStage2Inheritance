class BaseClass{
    constructor(x,y,width,height,angle){
       var options ={
           'restiution':0.8,
           'friction':1.8,
           'density':0.8
       };
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("sprites/base.png");

       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
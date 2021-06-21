class Stone{

    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8,
            'friction':0.9,
            'density':30
        }    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
class Paper
{
    constructor()
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        
        this.body = Bodies.circle(300,400,35,options)
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display()
    {
        var paperpos = this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        imageMode(CENTER);
        
        image(this.image,0,0,100,100);
        pop();
    }
}
class Dustbin
{

constructor(x,y,width,height)

 { var options =   {   isStatic:true
}
    this.height = height;
    this.width = width;
    this.body=Bodies.rectangle(x,y,width,height,options);
    world.add(world,this.body);
}
}
display()

{
var pos = this.body.position;
var angle=this.body.angle;
push()
translate(pos.x,pos.y);
rotate(angle)
rectMode(CENTRE)
fil("0");

rect(0,0,this.width,this.height);
pop();



}
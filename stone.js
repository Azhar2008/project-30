class Stone{
    constructor(x, y, sides, radius, color){
      this.r=radius;
      this.s=sides;
      this.c=color;
      var option={
        'isStatic':false,
        'restitution':1,
        'density':0.5
      }
      this.body=Bodies.polygon(x,y,sides,radius,option);
      World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      fill(this.c);
      polygon(pos.x,pos.y,this.r,this.s);
    }
  }
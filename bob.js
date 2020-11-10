class bob{
	constructor(x,y,radius){
	this.bob = Bodies.circle(x,y,radius);
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
        density:1.2
	}
	
}

displaybob(){
	this.body.position.x
    this.body.position.y
    super.display(); 
}
}
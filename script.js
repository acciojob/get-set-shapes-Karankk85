//complete this code
class Rectangle {
	constructor(widht, height){
		this._width = widht;
		this._height = height;
	}
	get width(){
		return this._width;
		return this._height;
	}
	getArea(){
		return this.width* this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	getPerimeter(){
		return 4* this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// Use the require keyword to access all of exports in the triangle, square and pentagon file

var triangle = require("./triangle.js");
var square = require("./square.js");
// var pentagon = require("./pentagon.js");

// Create the constructor for the Class Shape: It has the property type

// Shape -class
function Shape(type) {
  this.type = type;
}

// Create Shape constructor
var newShape = new Shape();

// Create the get_type method on Shape
Shape.prototype.get_Type = function() {
	return this;
};
//=========== THE TRIANGLE SUBCLASS===========================================
// Apply shape properties on triangle
function triangle(a, b, c) {
  Shape.apply(this, [a, b, c]); // Apply class constructor.
}

// subclass extends class
triangle.prototype = Object.create(Shape.prototype);
triangle.prototype.constructor = triangle;

// Create triangle constructor
var newTriangle = new triangle(	'side 1', 'side 2', 'side 3');

// Check whether the prototype works
console.log('Is newTriangle an instance of triangle?', newTriangle instanceof triangle);// true
console.log('Is newTriangle an instance of Shape?', newTriangle instanceof Shape);// true
console.log(newTriangle.get_Type()); // Outputs, Shape type and lengths of the sides.

//=========== THE SQUARE SUBCLASS===========================================
// Apply shape properties on triangle
function square(a) {
  Shape.apply(this, [a, b, c]); // Apply class constructor.
}

// subclass extends class
triangle.prototype = Object.create(Shape.prototype);
triangle.prototype.constructor = triangle;

// Create triangle constructor
var newTriangle = new triangle(	'side 1', 'side 2', 'side 3');

// Check whether the prototype works
console.log('Is newTriangle an instance of triangle?', newTriangle instanceof triangle);// true
console.log('Is newTriangle an instance of Shape?', newTriangle instanceof Shape);// true
console.log(newTriangle.get_Type()); // Outputs, 'Shape moved.
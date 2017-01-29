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
console.log("---------TRIANGLE -------------")
console.log('Is newTriangle an instance of triangle?', newTriangle instanceof triangle);// true
console.log('Is newTriangle an instance of Shape?', newTriangle instanceof Shape);// true
console.log("Shape Type is: ");
console.log(newTriangle.get_Type()); // Outputs, Shape type and lengths of the sides.

//=========== THE SQUARE SUBCLASS===========================================
// Apply shape properties on triangle
function square(a) {
  Shape.call(this, a); // Call class constructor.
}

// subclass extends class
square.prototype = Object.create(Shape.prototype);
square.prototype.constructor = square;

// Create square constructor
var newSquare = new square("length");

// Check whether the prototype works
console.log("---------SQUARE -------------")
console.log('Is newSquare an instance of square?', newSquare instanceof square);// true
console.log('Is newSquare an instance of Shape?', newSquare instanceof Shape);// true
console.log("Shape Type is: " );
console.log(newSquare.get_Type()); // Outputs, Shape type and length of the 4 sides.
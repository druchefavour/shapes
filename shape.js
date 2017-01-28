// Use the require keyword to access all of exports in the triangle, square and pentagon file

var triangle = require("./triangle.js");
var square = require("./square.js");
var pentagon = require("./pentagon.js");

// Create the constructor for the Class Shape: It has the property type

var Shape = function (type) {

	//class property
	this.type = type;
}
// class method
Shape.prototype.get_type = function () {
	return this.type;
	console.log(this.type);
}

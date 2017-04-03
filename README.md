# SHAPES - Object Oriented Programming

## Overview

In this project, prototypes are used to implement a Shape "class", and Triangle; Square; and Pentagon "subclasses". The ```instanceof``` operator behaves properly when used on instances of any of the three classes.

## Procedure

* A github repository named "shapes" is created. 
* The repository is initiated with ```readme.md``` and a ```.gitignore```. 
* A node is selected for the option when initiated with a ```.gitignore```.
* For the remaining steps, each constructor is in its own file. 
* ```module.exports``` to make a constructor available to other files. 
* ```require``` is used to import or include one constructor in another file. 

* A Shape constructor is created. 
  * The constructor has a property called type. 
  * A function, called get_type, is attached such that any Shape will be able to call it. 

* Triangle and Square constructors are created. 
  * The triangles should set the properties side1, side2, and side3 for its side lengths. 
  * The same is done for Square.

* The prototype of both of these objects is set equal to a new Shape().

* Shape.get_type should return the type of the shape that it's called on--but only be defined on Shape. An important resource could be found [here](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)

* The result is console.logged. 
* A Pentagon object, analogous to the other shapes is created. 
  * Implement the getType method
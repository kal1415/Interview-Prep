----------------------------------Prototypal Inheritance-----------------------------------------------------
prototype :

-JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function.

-Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

Prototypal Inheritance:

In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.

Syntax : ChildObject.__proto__ = ParentObject

We can implement prototype inheritance using 2 methods:

1.Using **proto**:

let animal = {
	animalEats: true,
};
let rabbit = {
	rabbitJumps: true,
};
// Sets rabbit.[[Prototype]] = animal
rabbit.__proto__ = animal;
console.log(rabbit.animalEats); //true
console.log(rabbit.rabbitJumps); //true 

We will store all the properties of the rabbit in the animal prototype object and thereafter we may access it whenever it is required.


2.Using Object.setPrototypeOf()

let rabbit = {
	rabbitJumps: true,
};
let animal = {
	animalEats: true,
};
Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.animalEats); //true
console.log(rabbit.rabbitJumps); //true


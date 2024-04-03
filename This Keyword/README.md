--------------------------------------Behavior of this keyword----------------------------------------------

-In JavaScript, the ‘this’ keyword always refers to an object.

-The thing about it is that the object it refers to will vary depending on how and where ‘this’ is being called.

-‘this’ is not a variable. It is a keyword, so we can not change or reassign the value of ‘this’.

## Alone, this refers to global object:

Ex: console.log(this);
Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

## ‘this’ in a object:

    We can use this to access the properties in that object.

Ex: const person = {
firstName: "John",
lastName : "Doe",
id : 5566,
getFullName : function() {
return this.firstName + ' ' + this.lastName;
}
};

console.log('this in object method', person.getFullName()); //John Doe

## ‘this’ in function:

    In a normal function, this refers to global object.

Ex: function test() {
console.log('this in a function', this);
}

test()
Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

## ‘this’ in arrow function:

-In arrow functions, JS sets the this lexically.
-This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.

Ex:
const show = () => this
console.log('arrow function this', show())
Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

## Note :

But if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword

const person = {
name: 'Pedro',
surname: 'Sanchez',
sayName: () => this.name + ' ' + this.surname
}

console.log(person.sayName()); //undefined

## 'this' in strict mode:

When using strict-mode, calling this within a function will return undefined.
Ex:
"use strict";
function show() {
console.log(this);
}
show(); // undefined

## this in an evenListener:

When using this in an event listener, this will refer to the DOM element that fired the event.
output: <button id="testBtn">TEST</button>

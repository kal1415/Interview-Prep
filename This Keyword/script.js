console.log("Alone this - global object", this);

const person = {
  firstName: "'John'",
  lastName: "'Doe'",
  id: 5566,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(
  "this in object - the properties in that object",
  person.getFullName()
); //John Doe

function test() {
  console.log("this in a function - global object", this);
}
test();

const show = () => this;
console.log("this in arrow function - global object", show());
// This in arrow function inside the object - undefined
// const person = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: () => this.name + " " + this.surname,
// };

// console.log(person.sayName()); //undefined

// "use strict";
// function show2() {
//   console.log("this in strict mode - undefined ", this);
// }
// show2(); // undefined

const head = document
  .querySelector("h2")
  .addEventListener("click", function () {
    console.log(
      "this on eventListener - the DOM element that fired the event. ",
      this
    );
  });

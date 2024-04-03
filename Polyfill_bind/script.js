/*
let obj = {
  firstName: "kalyan",
  lastName: "panchal",
};

function printName(age, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}. I'm ${age} years old, lives in ${state} `
  );
}

let displayName = printName.bind(obj, 34);
displayName("vijayawada");

// Function.prototype.myBind = function (obj, ...args) {
//   return (...newArgs) => this.apply(obj, [...args, ...newArgs]);
// };

Function.prototype.myBind = function (...args) {
  let func = this;
  let params = args.slice(1);
  return function (...newArgs) {
    func.apply(args[0], [...params, ...newArgs]);
  };
};

let displayName2 = printName.myBind(obj, 32);
displayName2("vijayawada");
*/

/* ---------------------Normal Bind method--------------------------------------- */
// const fullName = {
//   firstName: "kalyan",
//   lastName: "panchal",
// };

// function details() {
//   console.log(`My name is ${this.firstName} ${this.lastName}`);
// }

// const printDetails = details.bind(fullName);
// printDetails();

/* ---------------------Polyfill Bind method--------------------------------------- */
// const fullName = {
//   firstName: "kalyan",
//   lastName: "panchal",
// };

// function details() {
//   console.log(`My name is ${this.firstName} ${this.lastName}`);
// }

// const printDetails = details.bind(fullName);
// printDetails(); // My name is kalyan panchal

// Function.prototype.myBind = function (fullName) {
//   let obj = this;
//   return function () {
//     obj.call(fullName);
//   };
// };

// const printDetails2 = details.myBind(fullName);
// printDetails2(); // My name is kalyan panchal

/* 
In the above method, we created polyfill for bind(which is user defined bind i.e:myBind) 

But, what if we wanted to pass arguments to myBind().
*/

/* ---------------------Polyfill Bind method( if we want to pass arguments to myBind()/bind())--------------------------------------- */
const fullName = {
  firstName: "kalyan",
  lastName: "panchal",
};

function details(age, city) {
  console.log(`My name is ${this.firstName} ${this.lastName}, ${age} ${city}`);
}

const printDetails = details.bind(fullName, 25, "vijayawada");
printDetails(); // My name is kalyan panchal 25 vijayawada

Function.prototype.myBind = function (fullName, ...args) {
  let obj = this;
  return function () {
    obj.apply(fullName, [...args]);
  };
};

const printDetails2 = details.myBind(fullName, 24, "vijayawada");
printDetails2(); // My name is kalyan panchal 24 vijayawada

/*In this way, we can pass arguments to myBind function */

/* ---------------------Polyfill Bind method( if we want to pass arguments to printDetails())--------------------------------------- */
// const fullName = {
//   firstName: "kalyan",
//   lastName: "panchal",
// };

// function details(age, city, state) {
//   console.log(
//     `My name is ${this.firstName} ${this.lastName}, ${age} ${city}, ${state}`
//   );
// }

// const printDetails = details.bind(fullName, 25, "vijayawada");
// printDetails("AP"); // My name is kalyan panchal, 25 vijayawada, AP

// Function.prototype.myBind = function (fullName, ...args) {
//   let obj = this;
//   return function (...newArgs) {
//     obj.apply(fullName, [...args, ...newArgs]);
//   };
// };

// const printDetails2 = details.myBind(fullName, 24, "vijayawada");
// printDetails2("AP"); // My name is kalyan panchal, 24 vijayawada, AP

/*In this way, we can pass arguments to printDetails function */

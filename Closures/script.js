// const outer = () => {
//   const age = "24";
//   const inner = () => {
//     const name = "babu";
//     console.log(name, age);
//   };
//   return inner;
// };

// const result = outer();
// result();

// //closure is a function that can access the variables that are present in outer scope of the function even after the outer function returned.
// //First the inner function checks if there are any variables inside the inner function, if there is no variables in inner function, then it checks its parent function for the variable.

// // const myName = (name) => {
// //   const myPlace = (place) => {
// //     const myAge = (age) => {
// //       //   let age = 30;
// //       console.log(`My name is ${name} my age is ${age}, my place is ${place}`);
// //     };
// //     return myAge;
// //   };
// //   return myPlace;
// // };
// // const username = myName("kalyan");
// // console.log(username); //It returns myPlace(place) function:
// // // (place) => {
// // //     const myAge = (age) => {
// // //       //   let age = 30;
// // //       console.log(`My name is ${name} my age is ${age}, my place is ${place}`);
// // //     };
// // //     return myAge;
// // //   }
// // const userPlace = username("vij");
// // console.log(userPlace); //It returns myAge(age) function:
// // // (age) => {
// // //     //   let age = 30;
// // //     console.log(`My name is ${name} my age is ${age}, my place is ${place}`);
// // //   }
// // const userDetails = userPlace(36);

// const myName = (name) => {
//   const myPlace = (place) => {
//     const myAge = (age) => {
//       //   let age = 30;
//       console.log(`My name is ${name} my age is ${age}, my place is ${place}`);
//     };
//     return myAge;
//   };
//   return myPlace;
// };
// // myName("kalyan")("vij")(24); //We can call like this as well.

// const details = myName("panchal");
// const res = details("guntur");
// res(20);

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(`After ${i} seconds: ${i}`);
//   }, i * 1000);
// }

// op:
// After 4 seconds: 4
// After 4 seconds: 4
// After 4 seconds: 4

// What we wanted to do in the loop is to copy the value of  i in each iteration at the time of iteration to display a message after 1, 2, and 3 seconds.

// The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure.
//It remembers the value of i from the last iteration of the loop, which is 4.

// In addition, all three closures created by the for-loop share the same global scope access the same value of i.

// To fix this issue, you need to create a new closure scope in each iteration of the loop.

//We can do it in 2 ways :

/*
1.IIFE
2.using let 
*/

//IIFE:
// (() => console.log("test"))(); //IIFE - Immediate Invoke function execution

//An IIFE creates a new scope by declaring a function and immediately executing it.

// for (var i = 1; i <= 3; i++) {
//   ((i)=>setTimeout(() => {
//     console.log(`After ${i} seconds: ${i}`);
//   }, i * 1000))(i);
// };

// op:
// After 1 seconds: 1
// After 2 seconds: 2
// After 3 seconds: 3

//2.using let

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`After ${i} seconds: ${i}`);
  }, i * 1000);
}

// op:
// After 1 seconds: 1
// After 2 seconds: 2
// After 3 seconds: 3

/*
In ES6, you can use the let keyword to declare a variable that is block-scoped.
If you use the let keyword in the for-loop, it will create a new lexical scope in each iteration. 
In other words, you will have a new index variable in each iteration.
In addition, the new lexical scope is chained up to the previous scope so that the previous value of the index is copied from the previous scope to the new one.

*/

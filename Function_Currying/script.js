// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// console.log(add(2)(4)(6));

//In arrow function:

// const sum = (a) => (b) => (c) => console.log(a + b + c);
// sum(2)(4)(6);

// -------------------------------------------------------------------------

// function add(x) {
//   return function (y) {
//     if (y) {
//       return add(x + y);
//     } else {
//       return x;
//     }
//   };
// }
// console.log(add(2)(3)(3)(6)(345)()); //359

//In arrow function:

const sum = (x) => (y) => y ? sum(x + y) : x;
console.log(sum(2)(3)(3)(6)(345)()); //359

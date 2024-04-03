// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1"); // Macrotask
// }, 0);

// Promise.resolve()
//   .then(() => console.log("Promise 1")) // Microtask
//   .then(() => console.log("Promise 2")); // Microtask

// console.log("End");

setTimeout(() => console.log("Timeout"), 0); // Macrotask

Promise.resolve()
  .then(() => console.log("Promise 1")) // Microtask
  .then(() => {
    for (let i = 0; i < 1000000000; i++) {} // Long loop
    console.log("Promise 2"); // Microtask
  });

console.log("End");

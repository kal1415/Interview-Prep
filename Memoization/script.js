const add = (x) => {
  return x + 10;
};

const memo = (func) => {
  let cache = {};
  return function (x) {
    if (cache[x]) {
      console.log(`return result from cache`);
      return cache[x];
    } else {
      console.log("calculating the result ");
      const result = func(x);
      cache[x] = result;
      return result;
    }
  };
};

const calculate = memo(add);

console.log(calculate(5));
console.log(calculate(5));
console.log(calculate(5));
console.log(calculate(50));

/*
Basically memoization depends on two concepts. That is HOC and closures.

In this example, function memo is a HOC because it takes function as parameter and returns another function which has the actual logic.

And as closure remembers the variable scope from its inner scope even after returning the outer function.

At first time there is no value in the cache, so it executes else block

after calculating the result, function result is stored in cache, from the next time if block will get executed as we directly returning the cache result.

So memoization remembers the results of previous calls and returns the cached result when the same inputs occur again.

If the input is different, it will calculate the result again.

*/

// const add = (...data) => {
//   return data.reduce((total, curr) => total + curr);
// };

// const memo = (func) => {
//   let cache = {};
//   return function (...args) {
//     const keys = JSON.stringify(args);
//     if (cache[keys]) {
//       console.log(cache);
//       console.log(`return from cache`);
//       return cache[keys];
//     } else {
//       console.log(`calculating result...`);
//       const result = func(...args);
//       cache[keys] = result;
//       return result;
//     }
//   };
// };
// const calculate = memo(add);
// console.log(calculate(34, 45));
// console.log(calculate(34, 45));
// console.log(calculate(35, 45));

// Defining the polyfill for Promise.all
const myAll = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((res) => {
        result[i] = res;
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      }, reject);
    }
  });
};

// Define some example promises
const promise1 = Promise.resolve("Task 1 completed");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 2 completed");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 3 completed");
  }, 1500);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 4 completed");
  }, 1000);
});

// Using the polyfill to wait for all promises to resolve
myAll([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log(results);
    console.log("All tasks completed successfully:");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//   *****************************************************************************************************

// *******************************************Using async/await***********************************************
// Defining the polyfill for Promise.all
// const myAll = async (promises) => {
//   const result = [];
//   for (let i = 0; i < promises.length; i++) {
//     try {
//       const res = await Promise.resolve(promises[i]);
//       result.push(res);
//     } catch (error) {
//       throw error; // Rethrow error if any promise rejects
//     }
//   }
//   return result;
// };

// // Define some example promises
// const promise1 = Promise.resolve("Task 1 completed");
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task 2 completed");
//   }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task 3 completed");
//   }, 1500);
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task 4 completed");
//   }, 1000);
// });

// // Using the polyfill to wait for all promises to resolve
// (async () => {
//   try {
//     const results = await myAll([promise1, promise2, promise3, promise4]);
//     console.log("All tasks completed successfully:");
//     console.log(results);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();

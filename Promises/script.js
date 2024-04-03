function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 1 completed");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 completed");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 3 completed");
    }, 1500);
  });
}

function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flag = true;
      if (flag) {
        resolve("task 4 completed");
      } else {
        reject("not completed");
      }
    }, 2000);
  });
}

// task1()
//   .then((value) => {
//     console.log(value);
//     return task2();
//   })
//   .then((value) => {
//     console.log(value);
//     return task3();
//   })
//   .then((value) => {
//     console.log(value);
//     return task4();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("all tasks finished");
//   })
//   .catch((err) => console.error(err));

const allTasks = async () => {
  try {
    const result1 = await task1();
    console.log(result1);

    const result2 = await task2();
    console.log(result2);

    const result3 = await task3();
    console.log(result3);

    const result4 = await task4();
    console.log(result4);

    console.log("all tasks completed");
  } catch (err) {
    console.error(err);
  }
};

allTasks();

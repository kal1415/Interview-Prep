function handleInput(event) {
  document.getElementById("result").textContent = event.target.value;
}

const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer;

  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

const debouncedInputHandler = debounce(handleInput, 500);

const inputElement = document.getElementById("search-input");

inputElement.addEventListener("keyup", debouncedInputHandler);

// function debounce(func, timeout = 500) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }
// let counter = 0;
// function fetchResults() {
//   console.log("fetching input suggestions", counter++);
// }

// const processChange = debounce(() => fetchResults());

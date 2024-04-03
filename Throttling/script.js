function handleInput(event) {
  document.getElementById("result").textContent = event.target.value;
}

const debounce = (mainFunction, delay) => {
  let isWaiting = false;
  return function (...args) {
    const context = this;
    if (!isWaiting) {
      // Execute the function if it's not in isWaiting
      mainFunction.apply(context, args);
      isWaiting = true;

      // Set a timeout to reset the isWaiting
      setTimeout(() => {
        isWaiting = false;
      }, delay);
    }
  };
};

const inputElement = document.getElementById("search-input");
const throttledInputHandler = debounce(handleInput, 500);

inputElement.addEventListener("keyup", throttledInputHandler);

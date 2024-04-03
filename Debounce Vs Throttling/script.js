// var searchBarDom = document.getElementById("search-bar");
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// function getSearchResult() {
//   numberOfApiCalls += 1;
//   console.log("Number of API Calls : " + numberOfApiCalls);
//   console.log(
//     "============================ Normal Implementation ============================================="
//   );
// }
// searchBarDom.addEventListener("input", function (e) {
//   numberOfKeyPresses += 1;
//   console.log("Search Keyword : " + e.target.value);
//   console.log("Number of Key Presses : " + numberOfKeyPresses);
//   getSearchResult();
// });
// *********************************************************************************************************

// var searchBarDom = document.getElementById('search-bar');
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// const getSearchResult = debounce(() => {
//   numberOfApiCalls += 1;
//   console.log('Number of API Calls : ' + numberOfApiCalls);
//   console.log("============================ With Debounce =============================================");
// }, 1000);

// searchBarDom.addEventListener('input', function (e) {
//   numberOfKeyPresses += 1;
//   console.log('Search Keyword : ' + e.target.value);
//   console.log('Number of Key Presses : ' + numberOfKeyPresses);
//   getSearchResult();
// });

// function debounce(callback, delay = 1000) {
//   var time;
//   return (...args) => {
//     clearTimeout(time);
//     time = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }

var searchBarDom = document.getElementById("search-bar");
var numberOfKeyPresses = 0;
var numberOfApiCalls = 0;

const getSearchResult = throttle(() => {
  numberOfApiCalls += 1;
  console.log("Number of API Calls : " + numberOfApiCalls);
  console.log(
    "============================ With Throttling ==========================================="
  );
}, 1000);

searchBarDom.addEventListener("input", function (e) {
  numberOfKeyPresses += 1;
  console.log("Search Keyword : " + e.target.value);
  console.log("Number of Key Presses : " + numberOfKeyPresses);
  getSearchResult();
});

function throttle(callback, delay = 1000) {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      callback(...args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, delay);
    }
  };
}

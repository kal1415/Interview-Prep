---------------------------------polyfil for promise.all()------------------------------------------------

Promise.all : 

-Promise.all takes an array of promises as input and returns a promise object. 

-The returned promise will be resolved when all the promises in the input array are resolved. 

-If any of the promises in the input array is rejected, the returned promise will be rejected with the reason for the first rejected promise.

Ex:

const promises = [1, 2, 3].map((item) => Promise.resolve(item));
Promise.all(promises).then(console.log); // [1, 2, 3]



ref: https://dev.to/devsmitra/javascript-promise-methods-with-polyfill-example-a-cheat-sheet-for-developer-2h0e
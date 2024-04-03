------------------------------------------Promises----------------------------------------------------------

Promise:

-Promise is an object that manages multiple asynchronous operations such as fetching data from a server, reading a file, or any operation that takes time to complete.

-It's a proxy for a value not necessarily known when the promise is created.

-It may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved.

-A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

-The promise constructor takes only one argument which is a callback function.

-The callback function takes two arguments which is functions, resolve and reject.

-Perform operations inside the callback function and if everything went well then call resolve.

-If desired operations do not go well then call reject.

-The main idea behind promises is to provide a cleaner and more manageable way to handle asynchronous code compared to traditional callback functions, which can lead to complex and nested code structures (known as "callback hell").

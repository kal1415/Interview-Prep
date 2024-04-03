------------------------------------------Event Loop----------------------------------------------------

-JavaScript is a single-threaded programming language. It can do only one thing at a single point in time.

-The event loop is a mechanism that allows JavaScript to execute one task at a time, handling asynchronous operations using the callback queue.

-There are mainly four things in the JS runtime environment, they are call stack, web API, callback queue, Event loop.

## call stack :
-This is where JavaScript executes function calls. When a function is called, it's added (pushed) to the stack. When the function returns, it's removed (popped) from the stack.

## callback queue:
-A holding area for tasks that are ready to be executed, but need to wait for the call stack to be empty.

-Tasks often end up here because they involve waiting (e.g., waiting for a network response, the expiration of a timer, or a user click).

-Basically, callback queue has two queues internally, microtask queue and macrotask queue.

-All the timers such as setTimeouts, setInterval, setImmediate functions are goes to macrotask queue and all the async functions, promises will go to microtask queue.

-Microtasks have a higher priority than macrotasks.

## Event loop:

-It's a continuous loop that monitors both the call stack and the callback queue. 

-As soon as the call stack is empty, it checks the callback queue and pushes the next task onto the call stack.

## conclusion:

-The event loop is the backbone of JavaScript's non-blocking I/O model. 

-This mechanism is what allows your web pages to remain responsive and interactive even when there are long-running operations happening in the background.
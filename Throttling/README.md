-----------------------------------------Throttling------------------------------------------------------

Throttle:

-Throttling in JavaScript is a technique used to limit the rate at which a function can be called or executed. 

-This can be useful in situations where a function is called multiple times in a short period of time, such as when a user is scrolling or resizing a browser window. 

-By throttling the function, you can ensure that it is only called a certain number of times per second, reducing the amount of work the function needs to do and improving the overall performance of your application.

-For example, assume we have defined the delay as one second in a throttle function. First, it will invoke the callback function immediately. Then, it will use the delay time as the waiting time and invoke the callback function every second until the event trigger becomes inactive.
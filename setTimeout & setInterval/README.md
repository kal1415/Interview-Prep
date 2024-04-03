----------------------------------------------setTimeout & setInterval--------------------------------------

-There is a situation, where we want to execute a function or a piece of code after a certain period of time.

-This process of executing a function at a particular time in the future or after a period of time is referred to as scheduling a call.

-There are two methods of scheduling a call in Javascript:

## setTimeout():

-The setTimeout Javascript method is used to call a function after a certain period of time. 

-The time after which the function will be called is given by the user in milliseconds.

## Syntax:
let timerID = setTimeout(func, delay)
## Ex:
const sayHi = () => console.log('After 5 sec',timer);
setTimeout(sayHi,5000);

## SetInterval():

-The setInterval Javascript method is used to call a function repeatedly at a specified interval of time. 

-This time interval at which the function will be called is provided by the user in milliseconds.

## Syntax:
let intervalID = setInterval(func, delay)

## Ex:
const sayHi = () => console.log(‘Every 1 sec');
const timer = setInterval(sayHi, 1000);
setTimeout(()=>clearInterval(timer),5000);

## summary:

-setTimeout() and setInterval() methods in Javascript allow us to run our code asynchronously (Program doesn't need to wait for a task to complete before moving on to the next task).

-The setTimeout() method is used to call a function after a certain period of time.

-The setInterval() Javascript method is used to call a function repeatedly at a specified interval of time.

-setTimeout() is canceled by clearTimeout() method, and setInterval() is canceled by clearInterval() method



-Recursive setTimeout() is used instead of setInterval() if more control over the delay start time is desired.

-setTimeout() and setInterval() saves the reference of a function which prevents garbage collection. To avoid it, we use clearInterval().


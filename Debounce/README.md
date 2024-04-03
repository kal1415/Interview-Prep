-------------------------------------Debounce----------------------------------------------------

Debounce:

-In JavaScript, debounce is a powerful technique used to optimize event handling by delaying the execution of a function until after a specified period of inactivity.

-It helps prevent excessive function calls triggered by rapid events, such as keystrokes or scroll movements.

-Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called.

-For example, imagine we have a search box that shows suggestions as the user types. If we call a function to fetch suggestions on every keystroke, we might end up making too many requests to the server, which can slow down the application and waste resources. Instead, we can use debouncing to wait until the user has stopped typing for a while before making the request.

Explanation:

-Debouncing ensures that a function is called only after a specified delay of inactivity.

-When an event is triggered, the debounce function starts a timer. If the function is called again within the delay period, the timer is reset.

-The function execution is deferred/holded until the delay has passed without any further calls.

-This delay helps prevent unnecessary or premature function calls, resulting in more efficient event handling.

Here are three simple real life examples of debouncing:

-Submit button:When you click a submit button on a website, it doesn’t send the data immediately, but waits for a few milliseconds to see if you click it again. This way, it prevents accidental double submissions and errors.

-Elevator: When you press the button to call the elevator, it doesn’t move immediately, but waits for a few seconds to see if anyone else wants to get on or off. This way, it avoids going up and down too frequently and saves energy and time.

-Search box: When you type something in a search box, it doesn’t show suggestions on every keystroke, but waits until you stop typing for a while. This way, it avoids making too many requests to the server and improves the performance and user experience.

Conclusion
-Debouncing is a useful technique to optimize web applications by reducing unnecessary or repeated function calls that might affect the performance or user experience. 

-We can implement debouncing in JavaScript by using a wrapper function that returns a new function that delays the execution of the original function until a certain amount of time has passed since the last call.

=====================================================================================================
Debounce:

Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.

A Debounce function is a higher-order function that returns another function, to create closure around the function parameters (func, timeout) and the timer variable.

The common use cases are Search box suggestions, text-field auto-saves, and eliminating double-button clicks.

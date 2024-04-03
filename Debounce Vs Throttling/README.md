--------------------------------Debounce Vs Throttling-------------------------------------------------

Debounce:

-Debouncing is a technique that delays the execution of a function until the user stops performing a certain action for a specified amount of time.

-For example, if you have a search bar that fetches suggestions from the backend as the user types, you can debounce the function that makes the API call, so that it only runs after the user stops typing for a few seconds.

-This way, you can avoid making too many API calls that might overload your server or return irrelevant results.

Throttling:

-Throttling is a technique that limits the execution of a function to once in every specified time interval.

-For example, if you have a resize event handler that adjusts the layout of your page, you can throttle the function that updates the layout, so that it only runs once every 100ms.

-This way, you can avoid running your code too frequently, which might cause janky user interface or high CPU usage.

Debounce Vs Throttling :

-The main difference between debouncing and throttling is that debouncing executes the function only after some cooling period, while throttling executes the function at a regular interval.

-Debouncing and throttling are both useful techniques to improve the performance of your code, but they have different use cases and effects.

conclusion:

-Debouncing delays the execution of your code until the user stops performing a certain action for a specified amount of time.

-Throttling limits the execution of your code to once in every specified time interval.

-Debounce is most suitable for control events like typing or button clicks.

-Throttle is most suitable for continuous user events like resizing and scrolling.

-We have to choose the one that suits our needs best.

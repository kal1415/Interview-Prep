----------------------------------------------------Closure-----------------------------------------------
Def:
-->A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

Explanation:
-->A closure is a function in another function that preserves the outer scope in its inner scope even after outer function is returned.

-->It allow functions to retain access to variables from their outer scope even after the outer function has finished executing.

-->This ability of a function to store a variable for further reference even after it is executed is called closure.

-->showing basic example for closure and explain it.

Rules and side Effects:

-->Closures have access to the outer function’s variable even after the outer function returns.

-->Closures store references to the outer function’s variables; they do not store the actual value.
so if the variables are updated in outer function then closure can access those updated values because it stores the references to the outer functions variables, but not values.

-->Closures are away from normal
As closures can access the updated values of the outer function variables, sometimes it leads to unexpected behaviour when there is a loop in function scope.

conclusion:

-->In JS, a closure is a function that references variables in the outer scope from its inner scope.

-->Closures are powerful in JavaScript and are commonly used in scenarios like creating private variables, implementing data encapsulation, and handling asynchronous operations.

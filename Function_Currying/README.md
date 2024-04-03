-------------------------------------------Function Currying--------------------------------------------

Fucntion currying:
Function currying is a technique in computer programming that involves transforming a function that takes multiple arguments into a series of functions that take a single argument each.

-It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

-Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

-In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

-That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3).

Benefits/Uses:

-It helps us to create a higher-order function

-It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.

-Code re-usability

-Flexibility

-Eliminates redundant code

-It helps us to avoid passing the same variable multiple times

-Improved code readability

Partial Application:
Partial application transforms a function into another function with smaller arity.
The number of arguments a function takes is also called arity.

function sum(a) {
return (b, c) => {
return a + b + c
}
}

sum(10)(3,12);

Currying:

function sum(a) {
return (b) => {
return (c) => {
return a + b + c
}
}
}

sum(10)(3)(12);

Techniques to Achieve Currying in JavaScript Code:

Using Closure:

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(add(1)(2)(3)); // outputs 6

Using Bind:

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = add.bind(null, 1);

console.log(curriedAdd(2, 3)); // outputs 6

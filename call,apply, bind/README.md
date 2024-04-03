-----------------------------------call, apply and bind()---------------------------------------------

-By default 'this' is a window object.

-call, apply and bind is basically used to bind the 'this' to the function.

-we can call a method indicating to which object the keyword this will refer to

-call and apply are same, it executes then and there whenever we use that.

-The only difference is the way we are passing the arguements.

-When we use call, we pass the arguments with coma sperated values, if we use apply, we should pass the arguments in array[].

-Bind() is basically used where we bind the reference of the "this" to your function and it returns a new function and it dont execute immediately.

-It basically wait, whenever the user wants to execute the function at later point of time they can use that
-Ex. addEventListener

--------------------------------------------strict mode-----------------------------------------------
strict mode :

-Strict mode in JavaScript, introduced in ECMAScript 5, is a way to enable a more restrictive coding environment.

-It enforces stricter rules and error handling compared to the default "sloppy mode."

Here's a breakdown of its key aspects:

**Enabling Strict Mode:**

- You can activate strict mode by placing `"use strict";` at the beginning of your code file or within a function.

**Benefits of Strict Mode:**

- **Enhanced Error Handling:** Strict mode throws errors for actions like using undeclared variables, assigning values to read-only properties, or creating global variables unintentionally. This helps catch potential bugs early on.

- **Improved Code Clarity:** It enforces explicit coding practices by disallowing implicit actions that might lead to unexpected behaviors. This makes your code cleaner and easier to understand.

- **Potential Performance Gains:** Strict mode's simplified scope management sometimes allows for better code optimization.

- **Future-proofing:** By following stricter rules, your code aligns better with future JavaScript standards.

## Note:

Using "use strict"; is considered a good practice as it helps to write cleaner, more reliable JavaScript code by catching common mistakes and enforcing better coding practices

## Examples:

'use strict';

// Non-strict mode
x = 10; // Throws a ReferenceError in strict mode

// Deleting a variable (strict mode)
var obj = {};
delete obj; // Throws a TypeError in strict mode

// Using reserved keywords as variable names (strict mode)
var private = 10; // Throws a SyntaxError in strict mode

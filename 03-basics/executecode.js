// js execution context
// 1. global execution context
// 2. function execution context
// 3. eval execution context

//phase 1: creation phase **
// 1. global object (window in browser)
// 2. this keyword (points to global object in global execution context)
// 3. outer environment (null in global execution context)
// 4. variable object (contains all variables and function declarations)

//phase 2: execution phase  **
// code is executed line by line
// variables are assigned values
// functions are executed

// example
var a = 10;
function foo() {
    console.log(a); // undefined (due to hoisting)
    var a = 20;
    console.log(a); // 20
}
foo();

// call stack
// 1. global execution context is created and pushed to the call stack
// 2. foo function execution context is created and pushed to the call stack
// 3. foo function is executed and popped from the call stack
// 4. global execution context is popped from the call stack when the program ends
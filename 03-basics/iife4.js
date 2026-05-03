// Immediately Invoked Function Expression (IIFE) 


(function abc() { //named function expression, the name is optional, it can be anonymous function expression as well
    console.log(`Welcome to our website, this is an IIFE function`); // IIFE is a function that is executed immediately after it is defined, it is a self-invoking function, it is used to create a new scope and avoid polluting the global scope
})();

( (name) =>  { // arrow function expression, the name is optional, it can be anonymous function expression as well
    console.log(` Welcome to our website ${name}, this is an IIFE function using arrow function`); // IIFE is a function that is executed immediately after it is defined, it is a self-invoking function, it is used to create a new scope and avoid polluting the global scope
}  )('aaryan');






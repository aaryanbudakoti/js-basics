let c = 300 // global scope - it is accessible anywhere in the code, but it is not recommended to use global variables as they can lead to bugs and unexpected behavior, so it is recommended to use local variables instead

// avoid var - var is function scoped, it can lead to bugs and unexpected behavior, so it is recommended to use let and const instead of var
if (true){
    let a = 10
    const b = 20 
     let c = 30
     console.log(c);
     
 // block scope- it is only accessible within the block it is defined in, so a and b are not accessible outside the block, but c is accessible outside the block because it is defined in the global scope
    } 





// console.log(a);
// console.log(b);
console.log(c); // var is function scoped, so it is accessible outside the block, but let and const are block scoped, so they are not accessible outside the block


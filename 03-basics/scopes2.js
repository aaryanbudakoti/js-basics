let c = 300 // global scope - it is accessible anywhere in the code, but it is not recommended to use global variables as they can lead to bugs and unexpected behavior, so it is recommended to use local variables instead

// avoid var - var is function scoped, it can lead to bugs and unexpected behavior, so it is recommended to use let and const instead of var
if (true){
    let a = 10
    const b = 20 
     let c = 30
    //  console.log(c);
     
 // block scope- it is only accessible within the block it is defined in, so a and b are not accessible outside the block, but c is accessible outside the block because it is defined in the global scope
    } 





// console.log(a);
// console.log(b);
// console.log(c); // var is function scoped, so it is accessible outside the block, but let and const are block scoped, so they are not accessible outside the block



function one() {
    const username = "aaryan"

    function two(){
        const website = "www.aaryan.com"
        // console.log(username); // username is accessible in function two because it is defined in the outer scope, so it is accessible in the inner scope
    }
    // console.log(website); // website is not accessible in function one because it is defined in the inner scope, so it is not accessible in the outer scope
    
    two()
    
}
one()

// child function can access the variables of the parent function, but vice versa is not true

if (true) {
    let d = 400
    // console.log(d); // d is accessible within the block because it is defined in the block scope, but it is not accessible outside the block because it is not defined in the global scope
}

// console.log(d); // d is not accessible outside the block because it is defined in the block scope, so it is not accessible in the global scope


// ******************************************* interesting concept *******************************************
 addone(5) // this will work because addone is a function declaration and it is hoisted, so it is accessible before it is defined
function addone(num){
    return num + 1;
}


addtwo(5) // this will throw an error because addtwo is not defined before it is called, because it is a function expression and it is not hoisted, so it is not accessible before it is defined
const addtwo = function(num){
    return num + 2;
}
// addtwo is a function expression, it is not hoisted, so it is not accessible before it is defined, so it will throw an error if we try to call it before it is defined


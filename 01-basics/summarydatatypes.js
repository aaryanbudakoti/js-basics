// // Datatypes are of two types - primitive and non-primitive

// // Primitive (call by value) - String, number, boolean, null, undefined, symbol, bigInt 

// // Non-Primitive (call by reference) - arrays , objects , Functions

// const score = 100;
// console.log(typeof score);

// const isLoggedIn= false
// console.log(typeof isLoggedIn);

// const id = Symbol('123')
// const anotherId = Symbol ('123')

// console.log(id== anotherId);

// // to use bigInt, write 'n' in the last of the value/number

// const heroes = ["ironman", "captain america", "spiderman"]
// console.log(heroes);

// let myObj= {
//     name: "aaryan" , 
//     age: "21"

// }

// console.log(myObj);


// const myfunction = function(){
//         console.log("Hello World");
        
// }

// =======================================================================================================================

// Stack (primitive type ) and Heap (non primitive type)

let myYoutubeName = "Aaryanvlogs"

let anotherName = myYoutubeName
anotherName = "aaryanlifts"
console.log(anotherName);

let userOne = {
    email: "user.com",
    upi: "user@kotak",


}
let userTwo = userOne 
 userTwo.email = "user2.com"
console.log(userOne);

// In the above example (heap example), when we assign userOne to userTwo, we are not creating a new object. Instead, both userOne and userTwo point to the same object in memory. Therefore, when we change the email property of userTwo, it also changes for userOne because they reference the same object.

// stack - call by value (primitive types) - when we assign a primitive value to another variable, it creates a copy of that value. So, when we change the value of one variable, it does not affect the other variable.

// heap - call by reference (non-primitive types) - when we assign a non-primitive value to another variable, it does not create a copy of that value. Instead, both variables point to the same object in memory. So, when we change the value of one variable, it affects the other variable because they reference the same object.
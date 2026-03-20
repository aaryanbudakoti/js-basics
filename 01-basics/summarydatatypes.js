// Datatypes are of two types - primitive and non-primitive

// Primitive (call by value) - String, number, boolean, null, undefined, symbol, bigInt 

// Non-Primitive (call by reference) - arrays , objects , Functions

const score = 100;
console.log(typeof score);

const isLoggedIn= false
console.log(typeof isLoggedIn);

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id== anotherId);

// to use bigInt, write 'n' in the last of the value/number

const heroes = ["ironman", "captain america", "spiderman"]
console.log(heroes);

let myObj= {
    name: "aaryan" , 
    age: "21"

}

console.log(myObj);


const myfunction = function(){
        console.log("Hello World");
        
}
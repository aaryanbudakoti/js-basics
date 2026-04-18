// singleton

// object literal

// Object.create(null) // to create an empty object without prototype


const mysym= Symbol("key1") // this will create a symbol with the description "key1"

const jsUser = {
    name: "Aaryan",
    [mysym]: "mykey1", // this is how we can use a symbol as a key in an object
    age: 21,
    email: "aaryan@example.com", 
    location : "Ghaziabad",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

console.log(jsUser["email"]);
console.log(jsUser[mysym]);

console.log(jsUser[mysym]);



myArray= [ "hi", "hello" ]

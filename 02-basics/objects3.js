// singleton

// object literal

// Object.create(null) // to create an empty object without prototype


const mysym= Symbol("key1") // this will create a symbol with the description "key1"

const jsUser = {
    name: "sonpari",
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

jsUser.email = "abc@gmail.com"
console.log(jsUser.email);
// Object.freeze(jsUser);
myArray= [ "hi", "hello" ]

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello World");
}

console.log(jsUser.greeting());
jsUser.greeting2 = function(){  
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting2());
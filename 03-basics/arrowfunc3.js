const user = {
    username : "aarayan",
    price : 999 ,


    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our website, your price is ${this.price}`); // 'this' refers to current context
        console.log(this);
        
    }


}

// user.welcomeMessage()
// user.username = "aaryan Budakoti"
// user.welcomeMessage()

// console.log(this); // 'this' refers to the global object, which is the window object in the browser, so it will log the window object in the console

// arrow function does not have its own 'this', it inherits 'this' from the parent scope, so it will log the global object in the console, which is the window object in the browser

// function football(){
    // let username = "aaryan" 
    // console.log(this.username); // 'this' refers to the global object, which is the window object in the browser, so it will log undefined in the console because there is no username property in the global object
// }

// football()

const football = () => {
    let username = "aaryan" 
    console.log(this.username); // 'this' refers to the global object, which is the window object in the browser, so it will log undefined in the console because there is no username property in the global object
}

football()

// const addtwo = (num1,num2) => {
    // return num1 + num2

// } 
// const addtwo = (num1,num2) => num1 + num2

const addtwo = (num1,num2) => (num1 + num2) // if we have more than one line of code, we need to use curly braces and return statement, but if we have only one line of code, we can omit the curly braces and return statement


console.log(addtwo(5,10));



// Functions 

// function saymyname(){
    // console.log("My name is Aaryan");

// }


// saymyname(); // this is how we can call a function

function addtwonumbers(num1,num2){
    // return num1+num2;
}

// const result = addtwonumbers(5,10); // this is how we can call a function with arguments
// console.log(result); // this will print the result of the function in the console

function multiplytwonumbers(num1,num2){  // parameters are num1 and num2 (imp)
    // console.log(num1*num2);
}

multiplytwonumbers(5,10); // this is how we can call a function with arguments and it will print the result in the console
// 5,10 are arguments passed to the function (imp)

// parameters - variables defined in the function definition
// arguments - values passed to the function when it is called



// function addtwonumbers(num1,num2){
    // console.log(num1+num2);
    // return num1+num2;
// }

// const result1 = addtwonumbers(5,10); // this is how we can call a function with arguments and it will print the result in the console
// console.log( "result1: ", result1); // this will print the returned value of the function in the console

// if we want to return a value from the function, we can use the return keyword


function loginUserMessage(username = "user"){ // this is how we can set a default value for a parameter in a function, if we do not pass any argument, it will take the default value
    if (!username){
        console.log("Please provide a username");
        return;
    }
    return ` ${username} just logged in`
}

// console.log(loginUserMessage("Aaryan")); // this is how we can call a function with arguments and it will return the message in the console
// console.log(loginUserMessage(   )); // this is how we can call a function with arguments and it will return the message in the console, but since we have not passed any argument, it will return "undefined just logged in" because username is undefined in this case

// shopping cart logic (example of a function with multiple parameters and default values)

function calculateCartPrice (...num1){ //rest operator is used to take all the arguments passed to the function and store them in an array, so num1 will be an array containing all the arguments passed to the function
    return num1
}

// console.log(calculateCartPrice(200,400,500)); // this will return an array containing all the arguments passed to the function


const User = {
    username: "aaryan",
    price : 500,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(User); 

handleObject({
    username: "aaryan",
    price : 500,
}); // this is how we can pass an object as an argument to a function without storing it in a variable, this is called an anonymous object


const myarr = [200,1000,400,300]

function returnSecondValue(getarray){
    return getarray[1]; // this will return the second value of the array   
}

console.log(returnSecondValue(myarr)); // this will return the second value of the array which is 1000
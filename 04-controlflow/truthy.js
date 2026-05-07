//truthy and falsy values
// falsy values: false, 0, "", null, undefined, NaN
// truthy values: all other values

if (0) {
    console.log("This will not be printed");
}

if ("") {
    console.log("This will not be printed");
}

if (null) {
    console.log("This will not be printed");
}

if (undefined) {
    console.log("This will not be printed");
}

if (NaN) {
    console.log("This will not be printed");
}

if (false) {
    console.log("This will not be printed");
}

if (true) {
    console.log("This will be printed");
}

if (1) {
    console.log("This will be printed");
}

if ("hello") {
    console.log("This will be printed");
}

if ([]) {
    console.log("This will be printed");
}

if ({}) {
    console.log("This will be printed");
}

//ternary operator
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

//nullish coalescing operator
const userInput = null;
const defaultValue = "Default value";
const result = userInput ?? defaultValue;
console.log(`Result: ${result}`); //Output: Result: Default value
//what happened here is that the nullish coalescing operator (??) checks if the left-hand side (userInput) is null or undefined. Since userInput is null, it returns the right-hand side (defaultValue), which is "Default value". If userInput had a value other than null or undefined, it would have returned that value instead.
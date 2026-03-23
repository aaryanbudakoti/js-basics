// const score =  400

// const balance = new Number(100)
// console.log(balance);
// console.log(score);
// //difference between primitive number and number object is that primitive number is a simple data type that holds a single value, while number object is an instance of the Number class that can have properties and methods.

// console.log(balance.toString().length); // this will return the length of the string representation of the number object (balance) which is 3 (100)
// console.log(balance.toFixed(2)); // this will return a string representation of the number object (balance) with 2 decimal places (100.00)


// const anotherBalance = 23.8966

// console.log(anotherBalance.toPrecision(3)); 
// // this will return a string representation of the number object (anotherBalance) with 3 significant digits (23.9)

// const hundreds = 10000000000000
// console.log(hundreds.toLocaleString('en-IN')); // to indian locale // 
// this will return a string representation of the number object (hundreds) with a locale-specific formatting (10,000,000,000,000) in this case it is formatted with commas as thousand separators.
// toLocaleString() method is used to convert a number into a string, using locale-specific formatting. It can be used to format numbers according to the conventions of a specific locale, such as using commas as thousand separators or using a different decimal separator. The method takes an optional argument that specifies the locale to use for formatting. If no argument is provided, it will use the default locale of the environment.


// ++++++++++++++++++++MATHS+++++++++++++++++++++++
console.log(Math); // this will return the Math object which is a built-in object that has properties and methods for mathematical constants and functions.

console.log(Math.abs(-4)); // this will return the absolute value of -4 which is 4

console.log(Math.round(4.6)); // this will return the value of 4.6 rounded to the nearest integer which is 5

console.log(Math.floor(4.9)); // this will return the value of 4.9 rounded down to the nearest integer which is 4
console.log(Math.ceil(12.5)); // this will return the value of 12.5 rounded up to the nearest integer which is 13

console.log(Math.max(1,2,3,4,5)); // this will return the largest of the given numbers which is 5
console.log(Math.min(1,2,3,4,5)); // this will return the smallest of the given numbers which is 1

console.log(Math.sqrt(255)); // this will return the square root of 255 which is approximately 15.97

console.log(Math.random()); // this will return a random number between 0 and 1
console.log((Math.random() * 10)+1); // this will return a random integer between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // this will return a random integer between 10 and 20 (inclusive) by first generating a random number between 0 and 1, then multiplying it by the range of numbers (max - min + 1) and finally adding the minimum value (min) to shift the range to the desired values. The Math.floor() function is used to round down the result to the nearest integer.
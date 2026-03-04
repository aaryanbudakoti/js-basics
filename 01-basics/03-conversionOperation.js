let score = "aaryan"

console.log(typeof (score))

// conversion of string to number

let valueInNumber = Number(score) // guarantees the input to be a number, in case it is input as a string

console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN-  not a number

// conversion of .. number - number, "33abc"- number , true - 1, false - 0, null - number, undefined - NaN

let isLoggedIn= "abc"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1- true, 0 - false
// " " -empty - 0, "aaryan "- non-empty - 1

let sum = 33
let stringSum= String(sum)

console.log(typeof stringSum)
console.log(stringSum)



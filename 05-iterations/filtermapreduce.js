const coding = ["JavaScript", "Python", "Java"]

// for each loop does not work, if we store the function in a variable, it will return undefined
// const values = coding.forEach((item) => {
    // console.log(item)
    // return item
// })
// console.log(values) // undefined

// map method works, it returns a new array with the results of calling a provided function on every element in the calling array

// const values = coding.map((item) => {
    // console.log(item)
    // return item
// })
// console.log(values) // ["JavaScript", "Python", "Java"] 


const myNums = [1, 2, 3, 4, 5,6,7,8,9,10]
// filter method creates a new array with all elements that pass the test implemented by the provided function
const greaterNums = myNums.filter((num) => num > 4 ) 
console.log(greaterNums) // [5, 6, 7, 8, 9, 10]


const newNums = myNums.filter((num) => { 
    return num > 4 
// return is required when we use curly braces, if we do not use curly braces, it will return the value of the expression
})
console.log(newNums) // [5, 6, 7, 8, 9, 10]


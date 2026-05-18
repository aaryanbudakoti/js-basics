// reduce - reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const myNums = [1, 2, 3, 4, 5]

// sum of all numbers in the array
const sum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) // 0 is the initial value of the accumulator

console.log(sum) // 15

// find the maximum number in the array
const max = myNums.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue)
}, -Infinity) // -Infinity is the initial value of the accumulator

console.log(max) // 5




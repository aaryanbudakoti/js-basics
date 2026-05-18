

const myNums = [1, 2, 3, 4, 5,6,7,8,9,10]

// map method creates a new array with the results of calling a provided function on every element in the calling array

// const greaterNums = myNums.map((num) =>  num +10 )

// console.log(greaterNums);


//chaining map and filter methods
// chaining is a technique where we can call multiple methods on the same array, it allows us to perform multiple operations on the same array without having to create intermediate variables.
const newNums = myNums
                .map((num) => num * 10) // first we multiply each number by 10 // output will be [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map((num) => num + 10) // then we add 10 to each number // output will be [20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
                .filter((num) => num > 50) // then we filter the numbers that are greater than 50 // output will be [60, 70, 80, 90, 100, 110]

console.log(newNums);
// difference between filter and map 
// maps - transforms each element in the array and returns a new array with the transformed elements
// filter - creates a new array with all elements that pass the test implemented by the provided function, it does not transform the elements, it only filters them based on a condition.
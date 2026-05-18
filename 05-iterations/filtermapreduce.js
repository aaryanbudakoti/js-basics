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


// const myNums = [1, 2, 3, 4, 5,6,7,8,9,10]
// filter method creates a new array with all elements that pass the test implemented by the provided function
// const greaterNums = myNums.filter((num) => num > 4 ) 
// console.log(greaterNums) // [5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter((num) => { 
    // return num > 4 
// return is required when we use curly braces, if we do not use curly braces, it will return the value of the expression
// })
// console.log(newNums) // [5, 6, 7, 8, 9, 10]

// 

const books = [
    { title: "Book 1", author: "Author 1", rating: 4.5 },
    { title: "Book 2", author: "Author 2", rating: 3.8 },
    { title: "Book 3", author: "Author 3", rating: 4.2 },
    { title: "Book 4", author: "Author 4", rating: 4.9 },
    { title: "Book 5", author: "Author 5", rating: 3.5 }
]
// real world example of filter and map methods.
// filter books with rating greater than 4 and return the titles of those books

const userbooks = books.filter((book) => book.rating > 4);
console.log(userbooks) // ["Book 1", "Book 3", "Book 4"]

const booksUser = books.filter((book) => book.author === "Author 1")
 console.log(booksUser); // [{ title: "Book 1", author: "Author 1", rating: 4.5 }]
 
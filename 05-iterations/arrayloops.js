// for of loops are a great way to loop through arrays
// they are more concise and easier to read than traditional for loops

const arr = [1, 2, 3, 4, 5]

for( const num of arr) {
    // console.log(num)
}

// we can also use for of loops to loop through strings

const str = 'Hello World'

for(const char of str ){
    // console.log(char);
    
}


// maps
// maps are a new data structure in JavaScript that allow us to store key-value pairs. it allows unique keys and can be iterated in the order of insertion. they are similar to objects but have some advantages over them, such as allowing any type of key and having built-in methods for iteration and manipulation.
const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')

// console.log(map);

for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// objects - loop

const myobj = {
    game1 : 'Chess',
    game2 : 'Monopoly',
    game3 : 'Scrabble'
}
// for in loops are a great way to loop through objects
for (const key in  myobj) {
    // console.log(`${key}: ${myobj[key]}`);
}   


const programming = [ 'js', 'python', 'java', 'c++' ]

for (const lang in programming) {
    // console.log(lang); // this will log the index of the array
}
// to log the value of the array we can use the index to access the value
for (const lang in programming) {
    // console.log(programming[lang]); // this will log the value of the array
}


// for each loops are a great way to loop through arrays and objects
// they are more concise and easier to read than traditional for loops

programming.forEach( (lang) => {
    // console.log(lang);
})

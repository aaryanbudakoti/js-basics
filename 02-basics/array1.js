// Array declaration
let arr = [0,1,2,3,4,5]
console.log (arr);
 // can be of any datatype
console.log (arr[0]);
// shallow vs deep copy
let arr2 = arr; // this is a shallow copy, it will point to the same memory location as arr
arr2[0] = 100; // this will change the value of arr[0] as well, because arr and arr2 are pointing to the same memory location
console.log(arr); // [100,1,2,3,4,5]
console.log(arr2); // [100,1,2,3,4,5]

let arr3 = [...arr]; // this is a deep copy, it will create a new array with the same values as arr
arr3[0] = 200; // this will not change the value of arr[0], because arr and arr3 are pointing to different memory locations
console.log(arr); // [100,1,2,3,4,5]
console.log(arr3); // [200,1,2,3,4,5]

const myHeroes = ["Ironman", "Spiderman", "Thor", "Hulk"];
const nums = new Array(); // this is an empty array
const nums2 = new Array(10); // this will create an array of length 10 with all values as undefined
const nums3 = new Array(1,2,3,4,5); // this will create an array with the values 1,2,3,4,5



// array methods
myHeroes.push("Captain America"); // this will add "Captain America" to the end of the array
console.log(myHeroes);

myHeroes.unshift("Black Widow"); // this will add "Black Widow" to the beginning of the array
console.log(myHeroes);

myHeroes.pop(); // this will remove the last element from the array
console.log(myHeroes);

myHeroes.shift(); // this will remove the first element from the array
console.log(myHeroes);

myHeroes.splice(2,1); // this will remove 1 element from index 2 (Thor)
console.log(myHeroes);

myHeroes.splice(2,0,"Doctor Strange"); // this will add "Doctor Strange" at index 2 without removing any element
console.log(myHeroes);
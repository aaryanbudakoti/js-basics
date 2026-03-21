const name = "Aaryan"
const repoCount = 100

// console.log(name +" has " + repoCount + " repositories");
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("aaryan-lifts")  // this is not a primitive string, it is an object for the string datatype

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));



console.log(typeof gameName);

const newString = gameName.substring(0,6) // this will return a new string from index 0 to index 5 (6-1) and it will not change the original string (gameName)
console.log(newString);
console.log(gameName);
// original string is not changed

const anotherString = gameName.slice(-8,-5) // this will return a new string from index -8 to index -6 ( -5 - 1) and it will not change the original string (gameName) 
console.log(anotherString);

// using trim function

const Sirname = "  aaryan  "
console.log(Sirname.trim());


console.log(Sirname.includes("aar"));

console.log(gameName.split('-'));


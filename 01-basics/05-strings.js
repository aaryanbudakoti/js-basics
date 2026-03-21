const name = "Aaryan"
const repoCount = 100

// console.log(name +" has " + repoCount + " repositories");
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("chess")  // this is not a primitive string, it is an object for the string datatype

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

console.log(typeof gameName);

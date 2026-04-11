const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "batman", "Flash"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); // ["thor", "ironman", "spiderman", ["superman", "batman", "Flash"]]



const marvelAndDc =marvelHeroes.concat( dcHeroes);
console.log(marvelAndDc); // ["thor", "ironman", "spiderman", "superman", "batman", "Flash"] 

const anotherArray = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];

const flatArray = anotherArray.flat(Infinity); // this will flatten the array to any 
console.log(flatArray);


console.log(Array.isArray("badmash "));// false
console.log(Array.from("badmash ")); // ["b", "a", "d", "m", "a", "s", "h", " "]
console.log(Array.from({name: "badmash"})); // [undefined]

let score1= 100
let score2 = 200
let score3 = 300

const scores = [score1, score2, score3];
console.log(scores); // [100, 200, 300]

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
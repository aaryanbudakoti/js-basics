// for loop

// for (let i = 1; i<=10;i++) {
//     console.log(i);
//     if (i === 5) {
//         console.log("Halfway there!");
//     }
// }

// use Ctrl + D to select multiple lines and edit them at the same time


for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop iteration: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
        
    }

}


let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// break and continue

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking out of the loop at i = 5");
        break; // exit the loop when i is 5
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // skip the rest of the loop body for even numbers
    }
    console.log(i); // this will only print odd numbers     
}



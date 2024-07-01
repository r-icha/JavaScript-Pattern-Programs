 const prompt = require("prompt-sync")();
// console.log("Enter the value of an array:");
// const arr = [];


// for (let i = 0; i <10; i++) {
//     const val = prompt();
//     arr[i] = val;
// }

// for (let i = 0; i < arr.length; i++) {
//     const temp = arr.filter((elem) => {
//         // if (i == elem) {
//             return i==elem;
//         // }
//     })

//     if (temp.length == 1) {
//         console.log("Final value is:");
//         console.log("The value : "+ temp[0] + " ");
//     }
// }


const arr = [];
const counts = {};

// Collect 10 values from the user
for (let i = 0; i < 10; i++) {
    const val = prompt("Enter a value:");
    // arr.push(val); 
    arr[i] = val
}

// Count occurrences of each value
for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (counts[val]) {
        counts[val]++;
    } else {
        counts[val] = 1;
    }
}

// Print non-repeating values
for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (counts[val] === 1) {
        console.log(val);
    }
}

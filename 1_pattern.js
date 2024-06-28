//  Right_Half_Pyramid_Pattern

// let n =5
const prompt = require("prompt-sync")();
var n;
n = prompt("Enter Your Number:= ");
for(let i =1; i<=n; i++ ){
    for(let j=1; j<=i; j++){
        // console.log("*");
        process.stdout.write("*");
    }
console.log();
}
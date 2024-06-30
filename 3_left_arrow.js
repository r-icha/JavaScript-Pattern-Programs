let n=5
for(let row=1; row<=n; row++){
for(let col=1; col<=n-row; col++){
 process.stdout.write(" ");
}
for(let k=1; k<=row; k++){
 process.stdout.write("*");
}
console.log();
}
let m=5
for(let row1=1; row1<=m; row1++){
    for(let col1=1; col1<=row1; col1++){
        process.stdout.write(" ");
    }
    for(let l=1; l<=m-row1; l++){
        process.stdout.write("*");
    }
    console.log();
}
let n =5
for(let row= 1; row<=n; row++){
    for(let col=1; col<=n-row; col++){
     process.stdout.write(" ");
    }
    for(let k=1; k<=n; k++){
        process.stdout.write("*");
    }
    console.log();
}


//     *****
//    *****
//   *****
//  *****
//*****



let N = 5
for(let i=1; i<=N; i++){
    for(let j=1; j<=N-i+1; j++){
        process.stdout.write("*");
    }
    console.log();
}
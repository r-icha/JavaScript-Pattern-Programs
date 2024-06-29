let n = 5;
// outer loop
for (let row = 1; row <= n; row++) {
  // printing spaces
  for (let col = 1; col <= n - row; col++) {
    process.stdout.write(' ')
  }
  // printing stars
  for (let star = 0; star < 2 * row - 1; star++) {
    process.stdout.write('*')
  }
  console.log();
}

let m = 4;
for (let row1 = m; row1 >= 1; row1--) {
	for (let col1 = m - row1+1; col1 > 0; col1--) {
		process.stdout.write(" ");
	}
	for (let l = 0; l< 2 * row1 - 1; l++) {
		process.stdout.write("*");
	}
	console.log();
}


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
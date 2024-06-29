let n = 5;
for (let row = n; row >= 1; row--) {
	for (let col = n - row; col > 0; col--) {
		process.stdout.write(" ");
	}
	for (let k = 0; k < 2 * row - 1; k++) {
		process.stdout.write("*");
	}
	console.log();
}


// *********
//  *******
//   *****
//    ***
//     *
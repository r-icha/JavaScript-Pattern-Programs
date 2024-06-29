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


//     *        Row 1: 4 spaces, 1 star
//    ***       Row 2: 3 spaces, 3 stars
//   *****      Row 3: 2 spaces, 5 stars
//  *******     Row 4: 1 space,  7 stars
// *********    Row 5: 0 spaces, 9 stars

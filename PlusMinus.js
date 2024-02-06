// Input
// 6
// -4 3 -9 0 4 1

// Output
// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
  // Write your code here
  const long = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < long; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log((positive / long).toFixed(5));
  console.log((negative / long).toFixed(5));
  console.log((zero / long).toFixed(5));
}
const arr = [-4, 3, -9, 0, 4, 2];
plusMinus(arr);

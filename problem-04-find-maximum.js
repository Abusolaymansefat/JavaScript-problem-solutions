function findMaxNumber(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
// console.log(findMaxNumber( [5, 1, 9, 3]))
//  Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function findMaxNumber(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMaxNumber( [5, 1, 9, 3]))
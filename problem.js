// Reverse an array
// const arr = [ 1, 2, 3, 4]
// console.log(arr.reverse())

// 2. Find max number in an array

// const arr = [ 1, 5,7,10]
// console.log(Math.max(...arr))

// 3. Find min number in an array
// const arr = [5,5,4,10, 9,6]
// console.log(Math.min(...arr))

// 4. Remove duplicates from array
// const arr = [1,2, 2, 3, 4, 4,5]
// console.log([...new Set(arr)])

// 5. Sum of array elements
// const numbers = [1, 2, 3, 4, 5];

// Using a for loop
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("Sum using for loop:", sum);

// // Using Array.reduce()
// const sumReduce = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum using reduce():", sumReduce);

// 6. Check if a number is prime
function isPrime(n){
  if (n < 2) return false
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) return false
  }
  return true
  
}
console.log(isPrime(4))
console.log(isPrime(7))

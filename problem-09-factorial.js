function findFactorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (num === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// console.log(findFactorial([5]))
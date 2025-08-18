function reverseString(hello) {
  let reversed = '';
  for (let i = hello.length - 1; i >= 0; i--) {
    reversed += 
    hello[i];
  }
  return reversed;
}

// console.log(reverseString("hello"));
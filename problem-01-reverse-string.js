// Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

function reverseString(hello) {
  let reversed = '';
  for (let i = hello.length - 1; i >= 0; i--) {
    reversed += 
    hello[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
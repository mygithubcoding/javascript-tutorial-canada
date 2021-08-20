console.log("one");
console.log("two");

// This is an asynchronous function
// it does not block the rest of the code from getting executed.
setTimeout(() => {
  console.log("six");
  console.log("callback function fired");
}, 500);

console.log("three");
console.log("four");
console.log("five");

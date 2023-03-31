function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers += i;
  }
  // Change code above this line
  console.log(numbers);
}

createArrayOfNumbers(1, 3);

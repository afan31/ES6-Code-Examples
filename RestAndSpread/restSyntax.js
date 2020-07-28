function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

var ans1 = addNumbers([1, 2, 3, 4, 5]);

console.log(ans1);

// Don't pass an array, pass multiple arguments - Use rest operator

function addNumbers2(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

var ans2 = addNumbers2(1, 2, 3, 4, 5);

console.log(ans2);
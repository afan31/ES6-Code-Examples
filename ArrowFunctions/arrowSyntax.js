// OLD way
// const add = function (a, b) {
//   return a + b;
// }

const add = (a, b) => {
  return a + b;
}

// also. a single js expression can be reduced to -> an implicit return

const add2 = (a, b) => a + b;

let ans = add(1, 2);
console.log(ans);

let ans2 = add2(1, 2);
console.log(ans2);

// advanced use

const numbers = [1, 2, 3];

var ans3 = numbers.map(function (number) {
  return 2 * number;
});

console.log(ans3);

var ans4 = numbers.map(number => 2 * number);

console.log(ans4);
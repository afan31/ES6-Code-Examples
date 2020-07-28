function* numbers() {
  yield;
}

console.log(numbers());

const gen = numbers();
let ans1 = gen.next();
let ans2 = gen.next();

console.log(ans1);
console.log(ans2);
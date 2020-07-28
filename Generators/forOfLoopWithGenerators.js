function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();

let ans1 = gen.next();
let ans2 = gen.next();
let ans3 = gen.next();
let ans4 = gen.next();

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);


// for-of loop works perfectly with generators. Every single yield in generator creates a single run in for-of loop
// no need of next(), or done: true

// genretors can iterate through any data we want -> Big use of generators
const myColors = [];

for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors);
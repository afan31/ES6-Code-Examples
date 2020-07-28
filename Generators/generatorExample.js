function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store wiith cash
  const stuffFromStore = yield 'cash';

  // walking back home
  return stuffFromStore
}

// stuff in the store
const gen = shopping();

let ans1 = gen.next(); // leaving our house

// walked into the store
// walking up and down the aisles..
// purchase our stuff

let ans2 = gen.next('groceries'); // leaving the store with groceries -> 
// re-enter the generator at the yield statement , it reads yield 'groceries' instead of yield 'cash'


console.log(ans1);
console.log(ans2);
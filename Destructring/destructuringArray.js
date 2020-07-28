// destructuing object is all about pulling off properties - use curly braces
// destructuring array is all about pulling off individual elements - use square brackets

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [name, name2, name3, name4] = companies;

console.log(name);
console.log(name2);
console.log(name3);
console.log(name4);

// can use rest operator

const [nameNew, ...rest] = companies;

console.log(nameNew);
console.log(rest);
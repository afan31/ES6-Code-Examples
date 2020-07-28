function getMessage() {
  const year = new Date().getFullYear();

  // return "The year is " + year; - old way
  // return `The year is ${year}`; 
  return `The year is ${new Date().getFullYear()}`;
}

let ans = getMessage();
console.log(ans);
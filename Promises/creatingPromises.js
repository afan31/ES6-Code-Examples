promise = new Promise((resolve, reject) => {
  reject();
});

promise.then(() => {
    console.log("finally finished");
  }).then(() => console.log("I also ran")) //you can remove  {} since no return value 
  .catch(() => {
    console.log("uh oh")
  });

console.log(promise);
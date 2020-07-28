function makeAjaxRequest(url, method = 'GET') {
  return method;
}

let ans1 = makeAjaxRequest('google.com');
let ans2 = makeAjaxRequest('google.com', 'POST');
let ans3 = makeAjaxRequest('google.com', null); // method variable get's assigned to null value ( null is not equivalent to undefined)
let ans4 = makeAjaxRequest('google.com', undefined);

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
// fetch helper is a native function
const fetch = require("node-fetch");
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  // .then(data => console.log(data))  <- returns just the object, not the body content
  // return the content
  .then(response => response.json())
  .then(data => console.log(data))
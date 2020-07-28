const Google = {
  locations: ['Mountain View', 'London', 'New York']
}

const {
  locations: [location, ...rest]
} = Google;

console.log(location);
console.log(rest);
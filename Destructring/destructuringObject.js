var expense = {
  type: 'Business',
  amount: '$45 USD'
}

// old syntax
// var type = expense.type;
// var amount = expense.amount;

const {
  type,
  amount
} = expense;

console.log(type, amount);

// another use

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({
  name,
  extension,
  size
}, {
  color
}) {
  return `the file ${name} .${extension} is of size ${size} and has color ${color}`
}

let ans1 = fileSummary(savedFile, {
  color: 'red'
});

console.log(ans1);
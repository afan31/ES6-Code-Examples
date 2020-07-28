var expense = {
  type: 'Business',
  amount: '$45 USD'
}

// old syntax
// var type = expense.type;
// var amount = expense.amount;

const {
  type
} = expense;
const {
  amount
} = expense;

console.log(type, amount);
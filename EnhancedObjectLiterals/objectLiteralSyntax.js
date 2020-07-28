// Without  Enhanced Object Literal
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function () {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function (title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   }
// }


// With Enhanced Object Literal
// Rules: 
// 1. whenever the key-value has identical names, you can condense it down to just the key name
// 2. whenever you have a key-value pair, with value as a function, you can omit the function keyword and the colon itself
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}



const inventory = [{
    title: 'harry Potter',
    price: 10
  },
  {
    title: 'Eloquent JavaScript',
    price: 15
  }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.priceForTitle('harry Potter'));

console.log(bookShop.inventoryValue());
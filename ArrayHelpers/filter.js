var products = [{
    name: 'cucumber',
    type: 'vegetable'
  },
  {
    name: 'banana',
    type: 'fruit'
  },
  {
    name: 'celery',
    type: 'vegetable'
  },
  {
    name: 'orange',
    type: 'fruit'
  },
];

var filteredProducts = products.filter(function (product) {
  return product.type === 'vegetable';
});

console.log(filteredProducts);
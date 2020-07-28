var numbers = [1, 2, 3];

var doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

var cars = [{
    model: 'Buick',
    price: 'Cheap'
  },
  {
    model: 'Camaro',
    price: 'expensive'
  }
];

var prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);
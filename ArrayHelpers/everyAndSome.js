var computers = [{
    name: 'Apple',
    ram: 24
  },
  {
    name: 'Compaq',
    ram: 4
  },
  {
    name: 'Acer',
    ram: 32
  }
];

// every - AND operator
var ans1 = computers.every(function (computer) {
  return computer.ram > 16;
});

console.log(ans1);

//some - OR operator
var ans2 = computers.some(function (computer) {
  return computer.ram > 16;
});

console.log(ans2);
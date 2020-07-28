// Classes

class Car {
  constructor({
    title
  }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) { //dont destructure when using super()
    super(options); // Car.constructor()
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({
  color: 'red',
  title: 'Daily Driver'
});
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);

//const car = new Car({ title: 'Toyota'});
//car.drive();
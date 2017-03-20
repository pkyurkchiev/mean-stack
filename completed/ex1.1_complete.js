'use strict'
// Base Class : ES6
class Bird {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  walk() {
    console.log('walk!');
  }
}

// Subclass
class Penguin extends Bird {
  constructor(weight, height) {
    super(weight, height);
  }

  swim() {
    console.log('swim!');
  }
}

// Penguin object
let penguin = new Penguin(...);
penguin.walk(); //walk!
penguin.swim(); //swim!
// JavaScript classical inheritance.
// Base Class : ES5

// Bird constructor
function Bird(weight, height) {
  this.weight = weight;
  this.height = height;
}

// Add method to Bird prototype.
Bird.prototype.walk = function() {
  console.log('walk!');
};

// Penguin constructor.
function Penguin(weight, height) {
   Bird.call(this, weight, height);
}

// Prototypal inheritance (Penguin is-a Bird).
Penguin.prototype = Object.create( Bird.prototype );
Penguin.prototype.constructor = Penguin;

// Add method to Penguin prototype.
Penguin.prototype.swim = function() {
  console.log('swim!');
};

// Create a Penguin object.
let penguin = new Penguin(50,10);

// Calls method on Bird, since it's not defined by Penguin.
penguin.walk(); // walk!

// Calls method on Penguin.
penguin.swim(); // swim!
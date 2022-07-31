// Try, Catch, Finally and so on --- did nt write this --just watched it

// The Other Codes are in the main branch
// Started from try, catch, finally but didnt write its code anywhere

// 044. OOP (Object Oriented Programming)

/* 
- You use objects to represent real world things.
- Objects have own properties and functions(methods)
- Objects can contasin data and other code to represent info about what you are trying to model
- Data /methods inside the object is encapsulated

- In classic OOP, class is defined then when a n instance of that class is created all the prop and methods are coppied(!!) over to the intance

- Javascript is dynamic and does not provide a traditional class implementation per se.
- JS inheritance is prototype based
- Each object has a private propery called the prototype
- Ther prototype can have a prototype of its own
- Nearly all objects in JS are instances of Objects which sits on top of the prototype chain

- The protorype is a bucket top store properties and methods
- Prototype is a templete object and can have prototype properties of its own
- The prototype property is where inherited members are defined
*/

// Pretent this is a class:
function Ship() {
  this.floats = true;
  this.material = "steel";
  this.whatAmI = function () {
    console.log("I am made of : " + this.material);
  };
}

const myShip = new Ship();
myShip.whatAmI();

const myObj = {
  a: 1,
  b: 2,
};
console.log(myObj.a);

console.log(myObj.valueOf());
// IT INHERITS UP THE CHAIN
// DOES THIS
// Does myObj have a method called valueOf()?
// NO
// Does Object prototype have a method called valueOf()?
// YES
// myObj > Object

const myString = "hello";
console.log(myString.charAt(1));
// DOES THIS
// Does myString have a method called charAt()?
// NO
// Does Object have a method called charAt()?
// YES
console.log(myString.valueOf());
// Does myString have a method called valueOf()?
// NO
// Does String prototype have a method caled valueOf()?
// NO
// Does Object prototype have a method called valueOf()?
// YES

console.log(Object.keys(myObj));

// Object.keys() cannot be called on the object itself as tried below
// console.log(myObj.keys());

const myArray = ["a", "b", "c"];

myArray.push("d");
console.log(Array.prototype);
console.log(Object.prototype);
console.log(myArray);

myArray.slice(0);
console.log(myArray);

const name1 = {
  name: "Less",
  age: 16,
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
};

const name2 = Object.create(name1);

name2.sayName();
console.log(name2.age);

name2.name = "John Doe";
name2.sayName();
console.log(name2.hasOwnProperty("age"));

const name3 = Object.create(name2);
console.log(name3.hasOwnProperty("name"));

function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.sayBreed = function () {
  console.log(`I am a : ${this.breed}`);
};

// NB: Add the method onto the prototype as shown in the Animals prototype

function Dog(name, age, breed) {
  Animal.call(this, name, age);
  this.breed = breed;
}

console.log(Animal.prototype);
console.log(Dog.prototype);

const dog1 = new Dog("Yega", 3, "Pit Bull");

console.log(dog1);

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const dog2 = new Dog("Rex", 4, "Golden Retreiver");

console.log(dog2);
console.log(Dog.prototype);

dog2.sayBreed();
// dog2.sayBreed();

function Cat(name, age, coloration) {
  Animal.call(this, name, age);
  this.coloration = coloration;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scratchPost = function () {
  if (this instanceof Kitten) {
    console.log("Kitty scratched post!!!");
  } else {
    console.log(this.name + " has scratched the post");
  }
};

const kitty = new Cat("Meow", 5, "redd");
kitty.sayBreed();
kitty.scratchPost();

function Kitten(name, age, coloration, litter) {
  Cat.call(this, name, age, coloration);
  this.litter = litter;
}
Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten;

const littleOne = new Kitten("Meeeww", 0.43, "blue", 6);
littleOne.sayBreed();
littleOne.scratchPost();
console.log(littleOne.age);

console.log(littleOne instanceof Cat);
console.log(littleOne instanceof Animal);
console.log(littleOne instanceof Kitten);
console.log(littleOne instanceof Dog);

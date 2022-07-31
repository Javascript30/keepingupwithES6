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

function Animal(name, age, breed) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.breed = breed;
  obj.sayBreed = function () {
    console.log(`My breed is: ${obj.breed}`);
  };
  return obj;
}

function Animals(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

console.log(Animals.prototype);

Animals.prototype.sayBreed = function () {
  console.log(`I am a : ${this.breed}`);
};

const dog1 = new Animal("Yega", 3, "Pit Bull");
const dog2 = new Animals("Rex", 4, "Golden Retreiver");
console.log(dog1);
console.log(dog2);

console.log(Animals.prototype);

dog1.sayBreed();
dog2.sayBreed();

// NB: Add the method onto the prototype as shown in the Animals prototype

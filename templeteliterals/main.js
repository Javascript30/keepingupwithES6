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
// console.log(name2.hasOwnProperty("age"));

// const name3 = Object.create(name2);
// console.log(name3.hasOwnProperty("name"));

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

// 050  OOP : Using Classes

// Classes in ES6 are just syntactical sugar over JS's existing prototype-based inheritance
// Simple, clean sdyntax to creat objects and take care of inheritance

// Pre-ES6 way:
/*

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greetings = function () {
  console.log("Greetings " + this.name);
};

function Employee(name, age, role) {
  Person.call(this, name, age);
  this.role = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const bill = new Employee("Bill", 34, "developer");
bill.greetings();

console.log(Person.prototype);

// Pre-ES6 way:

*/

// Class Method:
// Classes are not hoisted
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log("Greetings " + this.name);
  }
  static sayHey() {
    console.log("Say Hey !!!");
  }
}

const bob = new Person("Bob", 45);
console.log(bob);
bob.greetings();

console.log(Person.prototype);

// 051 Class Inheritance

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
}

const lee = new Employee("Lee", 24, "developer");
console.log(lee);
lee.greetings();

class Customer extends Person {
  constructor({ name = "customer", age = "n/a", contactMethod }) {
    super(name, age);
    this.contactMethod = contactMethod;
    this.accountCredit = null;
  }
  addCredit(amount) {
    this.accountCredit += amount;
  }
  reduceCredit(amount) {
    this.accountCredit -= amount;
  }

  // Static method on Customer
  static sayHi() {
    console.log("Hi all !!");
  }

  // static sayCustomerNames(c1, c2) {
  //   console.log(`${c1.name}, ${c2.name}`);
  // }
  static sayCustomerNames(...customers) {
    customers.forEach((customer) => {
      console.log(customer.name);
    });
  }

  static transferCredit(source, target) {
    const amount = source.accountCredit;
    target.accountCredit += amount;
    source.accountCredit -= amount;
  }
}

const customer1 = new Customer({ contactMethod: "email" });

customer1.addCredit(100);

console.log(customer1);

customer1.reduceCredit(50);

console.log(customer1);

const customer2 = new Customer({ name: "Lee", age: 21, contactMethod: "Tel" });
const customer3 = new Customer({ name: "Owen", age: 21, contactMethod: "Tel" });

console.log(customer2.accountCredit);

customer2.addCredit(25);

console.log(customer2);

Customer.sayHey();
Customer.sayCustomerNames(customer3, customer2, customer1);

console.log(customer3.accountCredit);

Customer.transferCredit(customer2, customer3);
Customer.transferCredit(customer1, customer3);

console.log(customer2.accountCredit);
console.log(customer3.accountCredit);

// New Class Example

/* 

class Family {
  constructor(lastName) {
    this.lastName = lastName;
  }
  sayFamilyName() {
    console.log(`We are the ${this.lastName}'s`);
  }
}

class Parent extends Family {
  constructor(lastName, firstName) {
    super(lastName);
    this.firstName = firstName;
  }
}

class Child extends Family {
  constructor(lastname, firstName) {
    super(lastname);
    this.firstName = firstName;
  }
}

const dad = new Parent("Ngisirei", "John");
const mum = new Parent("Ngisirei", "Margaret");

const kim = new Child("Ngisirei", "Lesley");
const cedy = new Child("Ngisirei", "Cedric");

cedy.sayFamilyName();

*/

class FamilyMember {
  constructor(lastName, firstName, relationship) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.relationship = relationship;
  }
  sayFamilyName() {
    console.log(`We are the ${this.lastName}'s`);
  }
}

class FamilyGroup {
  constructor(parents = [], children = []) {
    this.parents = parents;
    this.children = children;
  }
  addMember(member) {
    this.children.push(member);
  }
}

// const dad = new FamilyMember("Ngisirei", "John", "Father");
// const mum = new FamilyMember("Ngisirei", "Margaret", "Mother");

// const kim = new FamilyMember("Ngisirei", "Lesley", "son");
// const cedy = new FamilyMember("Ngisirei", "Cedric", "son");

// const cherim = new FamilyGroup([dad, mum]);
// console.log(cherim.parents);

// cherim.addMember(kim);
// cherim.addMember(cedy);

// console.log(cherim);

const cherimFamily = {
  1: ["Ngisirei", "John", "father"],
  2: ["Ngisirei", "Margaret", "mother"],
  3: ["Ngisirei", "Lesley", "son"],
  4: ["Ngisirei", "Cedric", "son"],
  5: ["Ngisirei", "Cecil", "son"],
  6: ["Ngisirei", "Fajir", "daughter"],
};

const anotherFamily = {
  1: ["William", "Bill", "father"],
  2: ["William", "Diana", "mother"],
  3: ["William", "Britany", "daughter"],
  4: ["William", "Olephus", "son"],
  6: ["William", "Fajir", "daughter"],
};

const createFamily = (famObj) => {
  const newFamGroup = new FamilyGroup();
  for (const prop in famObj) {
    const [last, first, relationship] = famObj[prop];
    const newMember = new FamilyMember(last, first, relationship);

    // Add to the FamilyGroup it belongs to
    if (relationship === "father" || relationship === "mother") {
      newFamGroup.parents.push(newMember);
    } else {
      newFamGroup.children.push(newMember);
    }
  }
  return newFamGroup;
};

const theNgisireis = createFamily(cherimFamily);
console.log(theNgisireis);

const theWilliams = createFamily(anotherFamily);
console.log(theWilliams);

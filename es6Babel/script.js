const myDiv = document.getElementById("main");

const myArr = [1, 2, 3, 4, 5, 7, 8];

for (const prop of myArr) {
  myDiv.innerHTML += `<p>${prop}</p>`;
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

// eslint-disable-next-line no-unused-vars
const kim = new Person("Kimutai", 34);

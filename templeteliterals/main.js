// Templete Literals

/*

    - String literals allowing embedded exprssions
    - Makes it easier to create multiline strings and allows string interpolation
    - Enclosed in back-ticks (`String goes here`) instead of single quotes ('') or double quotes("")
    - Can contain placeholders

*/

let myFirstName = "Lesley";
let myLastName = "Kimutai";
let myAge = 23;

console.log(
  "Hello, " + myFirstName + " " + myLastName + ".I am " + myAge + " years old."
);

console.log(`Hello, ${myFirstName} ${myLastName}.I am ${myAge} years old.`);

let myNewList =
  "<ul>\n" +
  "<li>I am item 1</li>\n" +
  "<li>I am item 2</li>\n" +
  "<li>I am item 3</li>\n" +
  "</ul>";

// Template literals
let myOtherNewList = `
<ul>
    <li>I am es6 item 1</li>
    <li>I am item 2</li>
    <li>I am item 3</li>
    <li>I am item 4</li>
</ul>
`;
console.log(myNewList + myOtherNewList);

const myDiv = document.getElementById("myDiv");

myDiv.innerHTML += myNewList + myOtherNewList;
// myDiv.innerHTML += myOtherNewList;

const dateNow = new Date();
console.log(`Today's : ${dateNow.toLocaleDateString()}`);

const myArray = [1, 2, 3, 4, 5, 6];

myArray.map((num) => {
  console.log(num * 2);
});

console.log(`${myArray.map((num) => num * 3)}`);

const pizzaTopings = [
  "cheese",
  "chicken-tika",
  "paprika",
  "peperoni",
  "sause",
  "pineapple",
];

const myPizzaDiv = `<article>
        <h1>Pizza Ingredients</h1>
        <ul>
            ${pizzaTopings
              .map((pizza) => {
                return `<li>${pizza}</li>`;
              })
              .join("\n            ")}
        </ul>
    </article>
    `;

console.log(myPizzaDiv);

myDiv.innerHTML += myPizzaDiv;

console.log(myDiv);
// DESTRUCTURING

/*

  - The destructuring assignment syntax is a Javascript expression that makes it possible to extract data from arrays or objects into distinct variables
  - Destructuring syntax can be used on left-hand side of assignment
*/

const myArrayNum = [1, 2, 3, 4, 5, 7, 7, 8];

const [x, y, z] = myArrayNum;

console.table(myArray);

console.log(x, y, z);

// Object Destructuring

const myObj = {
  firstName: "Chris",
  lastName: "Houston",
  age: 23,
  height: "5'7''",
};

const { firstName, lastName, age, height } = myObj;
// const { age, firstName } = myObj;

console.log(firstName, lastName, age, height);
// console.log(firstName, age);

const myObj2 = {
  title: "My address book",
  entries: [
    {
      name: "Bob",
      number: "0743458906",
      address: "1572-30100, Eldoret",
    },
    {
      name: "Chris",
      number: "5433-677633",
      address: "157 Main St",
    },
    {
      name: "Lesley",
      number: "4355-24567",
      address: "30100 Broadway",
    },
  ],
  myPhone: "2455-677878",
};

const { title, entries } = myObj2;

const {
  // title,
  entries: [{ address, name: nnn }],
} = myObj2;

for (const { name, address } of entries) {
  console.table(`Name: ${name}, address is: ${address}`);
}

console.log(nnn, address, title);

// Exeption Handling

// Throw your own exeption

/*

  -  Use the throw statement to throw own exeption
  - You specify the exeption containing the value to be thrown 
    e.g : throw expresion
  -  Can throw any expression

*/

// throw "New Error!";

function checkIfNum(n) {
  if (isNaN(n)) {
    throw "This is not a number";
  } else {
    console.log(n);
  }
}

checkIfNum(" ");
// const myObj3 = { a: 1, b: 2 };

// myObj3.map((obj) => console.log(obj));

function MyException(message) {
  this.message = message;
  this.name = "My Exeption";
  this.toString = function () {
    return this.name + ": " + this.message;
  };
}

throw new MyException("Field Invalid");

// try ....catch sdtatements

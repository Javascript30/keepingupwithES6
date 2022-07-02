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

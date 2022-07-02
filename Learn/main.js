// jshint esversion:6
// Switch Statements

// switch(expression) {
//   case value1:
//   statement to ne executed when result of experssion matches value1
//   break;
//   case value2:
//   ....
//   break:
//   case value3:
//   ....
//   break:
//  default:
// }


// const myFruit = "orange";

// if (myFruit === "apple") {
//   console.log("Aweesome! I love apples.");
// } else if (myFruit == "oranges") {
//   console.log("Oranges are cool");
// } else if (myFruit === "pear") {
//   console.log("Pears are good too!!");
// } else {
//   console.log("That sounds prety OK.");
// }s

// function fruitLogger(fruit) {
//   switch (fruit) {
//     case "apple":
//     case "orange":
//     case "banana":
//       console.log("Great! I love fruit.");
//       break;
//     default:
//       console.log("I didn't understand that but sure :D");
//   }
//   console.log("Broke out of switch statement");
// }

// fruitLogger("banana");


// function numChecker(num) {
//   let value;
//   switch (num) {
//     case 0:
//     case 1:
//     case 2:
//       value = "low range";
//       break;
//     case 3:
//     case 4:
//     case 5:
//       value = "mid range";
//       break;
//     case 6:
//     case 7:
//     case 8:
//       value = "high range";
//       break;
//     default:
//       console.log("Input no between 0-9");
//       return;
//   }
//   // console.log(this);
//   // console.log("The value is a " + value + " number.");
//   setVolume(value);
// }

// numChecker(2);

// function setVolume(n) {
//   console.log("Volume set at " + n);
// }
// setVolume(8);

//
//
// const donutPicker = (flav) => {
//   switch (flav) {
//     case 's':
//       return "sprinkles";
//     case 'c':
//       return "chocolate glazed";
//     case 'b':
//       return "bear claw";
//     default:
//       return null;
//   }
// };
//
// const donut = (selection) => {
//   const selectedDonut = donutPicker(selection);
//   if (!selectedDonut) {
//     console.log("Incorrect selection");
//   } else {
//     console.log("You have selected " + selectedDonut);
//   }
// };

// donut('s');
// donut('c');
// donut('b');
// donut(4566766);



// 02. LOOPS

// Quick and easy way to do something repeatedly

/*
  Many types of loops but all do basically the same thing:
  repeat something a set no of times(could even be 0)
*/
// While loops

// let noOfLoops = 0;
// while (noOfLoops < 4) {
//   // console.log("I am looping!");
//   // console.log(noOfLoops);
//   noOfLoops++;
// }

// let num1 = 0;
// let num2 = 0;
//
// while (num1 < 100) {
//   num1 += 1;
//   num2 += num1;
//   // loopDeLoop();
//   if (num1 === 50) {
//     break;
//   }
// }
// console.log(num2);

// function loopDeLoop() {
//   // console.log("I'm looping!!!");
// }
//
// const names = ["Chris", "Bob", "Joe"];
// let index = 0;
// while (index < names.length) {
//   if (names[index] === "Joe") {
//     // console.log(names[index]);
//     break;
//   }
//   // console.log(names[index]);
//   index++;
// }

// do...while Loop
/*
  do {
  statement
}while (condition)
*/
// let shouldRunOnlyOnce = true;
// do {
//   // console.log("Looping!!");
//   index++;
//   if (index === 10) {
//     shouldRunOnlyOnce = false;
//   }
// } while (shouldRunOnlyOnce);

// let condition;
// do {
//   const userInput = prompt("Enter q to exit");
//   if (userInput === 'q') {
//     condition = false;
//   } else {
//     condition = true;
//   }
// } while (condition);

// let totalMoney = 100;
//
// do {
//   checkIfCanPurchase();
// } while (totalMoney > 500);
//
// function checkIfCanPurchase() {
//   if (totalMoney > 500) {
//     console.log("Can purchase :(");
//   } else {
//     console.log("Cannot purchase :)");
//   }
// }


// 03. For Loops
// Repeat until a specified condition evaluates to false
/*
  for(initial cond; condition; increment) {
  statement
}
*/

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

const iceCream = ["vanilla", "chocolate", "rocky road", "strawberry"];

function iceCreamLooper(arr, type) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === type) {
      console.log(arr[i] + " is at position: " + i);
    }
  }
}

iceCreamLooper(iceCream, "strawberry");

// for (var i = 1; i <= 10; i++) {
//   if (i % 15 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     break;
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

// Labels
// console.log("Starting Loop!!");
// outerLoop: //Labels
//   for (let i = 0; i < 10; i++) {
//     console.log("Loop # " + i);
//     innerLoop:
//       for (let a = 0; a < 10; a++) {
//         console.log("Inner loop # " + a);
//         if (a === 4) {
//           // break;
//           break innerLoop;
//         }
//
//         if (i === 6) {
//           break outerLoop;
//         }
//         // break innerLoop;
//
//       }
//   }
// console.log("Finished loop!!");

// setTimeout(function() {
//   console.log("One sec has passed");
// }, 1000);


// setTimeout(function() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }, 1000);

// function looper() {
//   for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }
// }
//
// looper();

// function looper(value) {
//   setTimeout(function() {
//     console.log(value);
//   }, value * 1000);
// }
//
// for (var i = 0; i < 10; i++) {
//   looper(i);
// }

// ES6 Version way::---
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 200);
// }


// For...in loop
/*
  Loops through an object's property in arbitrary order
*/
const users = {
  1: "Sally",
  g: "Billy",
  x: "Ashley",
  43: "Timmy"
};

console.log(users);

// for (let prop in users) {
//   console.log(users[prop]);
// }

// For Each
const drinks = ["mango", "del monte", "juice", "avocado", "sprite", "tea", "water", "milk"];

drinks.forEach((drink) => {
  console.log(drink);
});

// For..of loops
/*
  New loop in  ES6 used to loop over iterable objects(arrays, strings, maps, sets, etc)
*/

// for (let d of drinks) {
//   if (d === "tea") {
//     // break;
//     continue;
//   }
//   console.log(d);
// }

// const mystring = "😎💯😅";
// for (const char of mystring) {
//   console.log(char);
// }

// const originalArray = [10, 15, 20, 25, 30];
//
// function numIncreaser(arr, numToIncBy) {
//   for (let num of arr) {
//     num += numToIncBy;
//     console.log(num);
//   }
// }
// numIncreaser(originalArray, 5);


// Set

// const newArray = ["Chris", "Chris", "Jane", "Sally", "Bob", "chris", "Letoya"];
// const uniqueNameSet = new Set(newArray);

// for (const n of newArray) {
//   console.log(n);
// }

// for (const n of uniqueNameSet) {
//   console.log(n);
// }

// 02. LOOPS

//  Document Object Model (DOM):::-----

/*
  -Programming interface for HTML & XML documents
  -Provides a structured representation of the document
  -Defines methods to access the structure and manipulate it
  -Connects web pages to scripts of programming languages
  -DOM is NOT a programming language, it provvides a model of a web page
  -The page content is stored in the DOM and can be accessed and manipulated in Javascript
  -"The DOM provides a rep of the doc as a structured grp of nodes and obj that have prop and methods."
*/

// function showAlert() {
//   window.alert("Page loaded!!");
// }

// showAlert();

// document.body.innerText = "Something else";
// document.body.innerHTML = "<h1>Something else<h1>";

// const myTag = document.getElementsByTagName("p");
//
// console.log(myTag[2].innerHTML);
//


// let membersUl = document.getElementById('members');
//
// const allMemberNames = membersUl.getElementsByTagName("li");
// console.log(membersUl);
// allMemberNames[3].innerHTML = "Not Bob";


// document.querySelector('selector')

const dummyDivs = document.querySelectorAll('.dummy');

dummyDivs.forEach((n) => {
  n.style.color = "green";
});

for (const prop of dummyDivs) {
  prop.classList.add("purple");
  // prop.classList.add("foo");
}
//
// setTimeout(function() {
//   for (const prop of dummyDivs) {
//     prop.classList.remove("foo");
//   }
// }, 6000);

setInterval(() => {
  for (const prop of dummyDivs) {
    prop.classList.toggle("foo");
  }
}, 3000);




const creationDiv = document.getElementById('created');
const newElement = document.createElement("div");
// newElement.innerText = "I was created here!!";
// creationDiv.appendChild(newElement);


// console.log(newElement);

let newUl = document.createElement("ul");
// newElement.appendChild(newUl);
// console.log(newElement);
// creationDiv.appendChild(newElement);
// const newLI = document.createElement("li");
// newLI.innerText = iceCream[0];


iceCream.forEach(function(e) {
  let newLI = document.createElement("li");
  newLI.innerText = e;
  newUl.appendChild(newLI);

});

// for (let i = 0; i < iceCream.length; i++) {
//   let newLI = document.createElement("li");
//   newLI.innerText = iceCream[i];
//   newUl.appendChild(newLI);
// }

// newUl.appendChild(newLI);
newElement.appendChild(newUl);
creationDiv.appendChild(newElement);

// console.log(newElement);
function removeIceCream(t) {
  for (const prop of newUl.childNodes) {
    if (prop.innerText === t) {
      // newUl.removeChild(prop);
      prop.innerText = "sasabro";
    }
  }
}

removeIceCream("chocolate");
removeIceCream("strawberry");


// 08. EVENTS
/*
  - Any event that takes place in the DOM
  - Can be user gen or by an API
  - Many types of events
  - Event contains properties and methods
  - addEventListener function takes in the event to listen for, and the second arg to be called whenever the described event fires.
  - addEventListener("click", function () {
      logic inside func...
  })
*/

// document.addEventListener("click", function() {
//   // console.log("Clicked!!");
//   // alert("Clicked!!");
// });
const clickDiv = document.getElementById("clicky");

// clickDiv.addEventListener("click", function(event) {
//   alert("Hey sucker!!");
//   console.log(event.type);
// });


const clickableBtn = clickDiv.querySelector('button');
clickableBtn.addEventListener("click", logEvent);

// clickableBtn.addEventListener("focus", logEvent());
//
// clickableBtn.addEventListener("focusout", logEvent);

function logEvent(e) {
  clickableBtn.innerText = e.timeStamp;
  clickableBtn.removeEventListener("click", logEvent);
  console.log(e.type);
}








const bckgrnd = document.getElementById("background");

// bckgrnd.addEventListener("mousedown", switchBackground);
// bckgrnd.addEventListener("focusout", switchBackground);

document.addEventListener("click", switchBackground);
// document.addEventListener("focusout ", switchBackground);

const listItemsUl = bckgrnd.querySelector("ul");
listItemsUl.addEventListener("click", addGreen);

function switchBackground(e) {
  console.log(e);
  // if (e.which === 1) {
  //   bckgrnd.classList.toggle("background");
  // }
  const hasBeenClicked = bckgrnd.contains(e.target);
  console.log(hasBeenClicked);
  // if (e.type === "mousedown") {
  //   bckgrnd.classList.add("background");
  // } else if (e.type === "focusout") {
  //   bckgrnd.classList.remove("background");
  // }
  if (hasBeenClicked && e.type === "click") {
    bckgrnd.classList.add("background");
  } else {
    bckgrnd.classList.remove("background");
  }
}
// const allLIs = bckgrnd.querySelectorAll('li');

function addGreen(e) {
  // console.log(e.target);
  e.stopPropagation();
  console.log(e);
  const targetLi = e.target;
  if (targetLi.tagName === "UL") {
    return;
  }
  // for (const prop of allLIs) {
  //   prop.classList.remove("green");
  // }
  const green = document.querySelector('.green');
  if (green) {
    green.classList.remove("green");
  }
  targetLi.classList.add("green");
}

// Event handling should be done on the parent ...cildren is hectic as below

// const bckgrd2 = document.getElementById("background2");
//
// const allLis = bckgrd2.querySelectorAll("li");
//
// console.log(allLis);
//
// for (const prop of allLis) {
//   prop.addEventListener("click", function(event) {
//     // console.log("Clicked " + event.target);
//     console.log(this);
//   })
// }


// Preventing Defaults

const div2 = document.getElementById("div2");
const myLink = div2.querySelector('a');
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", addToList);

function addToList(e) {
  e.preventDefault();
  const myInput = document.getElementById("myInput").value;
  const newLI = document.createElement("li");
  newLI.innerText = myInput;
  myForm.reset();
  // console.log(newLI);

  listItemsUl.appendChild(newLI);

}


const div3 = getElementById("div3");
const para = div3.querySelector("p");
const textArea = div3.querySelector("textarea");
const paraText = "User is typing";

textArea.addEventListener('keydown', addText);
textArea.addEventListener('keyup', removeText);


function addText(e) {
  para.innerText = paraText;
}

function removeText(e) {
  para.innerText = "";
}



// myLink.addEventListener("click", function(event) {
//   event.preventDefault();
//   alert("Not Today !");
// })



/*

*/
/* eslint-disable no-unused-vars */
// Callbacks n Promises

/*

    - A way to write asynchronous JS
    - A callback function is a fn that is passed to another fn as a parameter
    - This inner fn is called at somepoint during the execution of the containing function
    -  In other words it's 'called back' at some specified point inside the containing function's body 

*/

//01. Examples

function shouldGoFirst(callBack) {
  setTimeout(() => {
    console.log("I go first !!");
    callBack();
  }, 1000);
}
function shouldGoSecond() {
  console.log("I go second !!");
}

// Showing that JS is synchronous

// shouldGoFirst();
// shouldGoSecond();

// Showing that JS is synchronous

// shouldGoFirst(shouldGoSecond);

//02. Another Example

function sumUpNumbers(num1, num2, cb) {
  let summedValue;
  setTimeout(() => {
    summedValue = num1 + num2;
    cb(summedValue);
  }, 1000);
}

function logSummedValue(val) {
  console.log(`The sumed total is: ${val}`);
}

// sumUpNumbers(300, 74, logSummedValue);

//03. Another Example

function sayWhenDone() {
  console.log(`I'm done looping`);
}

function looper(n, cb) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
  cb();
}

// looper(34, sayWhenDone);

//04. Anoter Example 4...

const myDiv = document.getElementById("main");
const myButton = myDiv.querySelector("button");
const myPara = document.getElementById("content");

const fakeData = {
  text:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita cum fugit. Quas quis odit, facilis accusamus tempore quo repellat laborum, magnam obcaecati non quibusdam, esse dolores numquam eos corrupti? Expedita repellendus ex itaque nihil explicabo qui ea? Deserunt, eveniet",
};

myButton.addEventListener("click", () => {
  console.log("clicked!!");
  reqData(populateDOM);
});

const reqData = (cb) => {
  let data = "Loading ...";
  cb(data);
  // Fake data req an res
  setTimeout(() => {
    // Res from server
    data = fakeData.text;
    cb(data);
  }, 2000);
};

const populateDOM = (data) => {
  myPara.innerText = data;
};

//05. Anoter Example 4...
function counter() {
  setTimeout(() => {
    console.log("First");
    setTimeout(() => {
      console.log("Second");
      setTimeout(() => {
        console.log("Third");
        setTimeout(() => {
          console.log("Fourth");
        }, 400);
      }, 600);
    }, 800);
  }, 1000);
}

counter();

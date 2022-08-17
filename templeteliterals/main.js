/* eslint-disable no-unused-vars */
// Promises

/*

- "A promise is a proxy for a value not necessarily known when the promise is created -  Mozilla Developer Network"
- Promises (similar to callbacks) are used for async computations
- Think of a promise as representing a value that may be availavable now, later or never
-  Can assosiate a handler with async action
- A promise exists in these states: 
          - Pending : Initial state, not fulfilled
          - Fulfilled : Ok! Got it
          - Rejected: failed

*/

//01. Examples

const testPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    reject("promise no good! Rejected");
  }
  setTimeout(() => {
    resolve("promise OK!");
  }, 1000);
});

testPromise
  .then((resolveMessage) => {
    console.log(`Looks like: ${resolveMessage}`);
  })
  .then(() => {
    console.log("I'm sandwiched here !!");
  })
  .then(() => {
    console.log("Promises are awesome!!");
  })
  .then(() => {
    console.log("I should run after promise!!");
  })
  .catch((rejectMessage) => {
    console.log(`Error: ${rejectMessage}`);
  });

// 02. Example 2

function numAdder(n1, n2) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.3) {
      reject("nope adder!!");
    }
    const addedNums = n1 + n2;
    setTimeout(() => {
      resolve(addedNums);
    }, 500);
  });
}

function numSquarer(num) {
  return new Promise((resolve, reject) => {
    // Was throwing an error --- handled by puting the catch on the outer Promise
    if (Math.random() > 0.7) {
      reject("nope squarer!!");
    }
    const squaredNum = num * num;
    setTimeout(() => {
      resolve(squaredNum);
    }, 1000);
  });
}

numAdder(100, 532)
  .then((data) => console.log(`Added total: ${data}`))
  .catch((err) => console.log(err));

numSquarer(34)
  .then((data) => console.log(`Squared num: ${data}`))
  .catch((err) => console.log(err));

numAdder(10, 5)
  .then((data) => numSquarer(data))
  .then((moreData) => console.log(moreData))
  .catch((err) => console.log(err));

// 03. Example 3

const prom = Promise.resolve([13, 677, 775.6, 54]);
prom
  .then((nums) => nums.map((num) => num * 2))
  .then((transformedNums) => console.log(transformedNums));

// 04. Another Example 4

const anotherProm = Promise.resolve({ text: "resolved: D!!" });
anotherProm.then((data) => console.log(data.text));

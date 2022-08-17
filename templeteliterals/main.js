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

// Global scope
let a = 1

// Function scope
function add5(a, b) {
  let c = 5
  return a + b + c
}

// console.log(c) // => ReferenceError: c is not defined

// Block scope
if (a === 1) {
  let e = 2
}

// console.log(e) // => ReferenceError: e is not defined

// Difference between var and let in action

if (a === 1) {
  var f = 4
}

console.log(f) // => 4

// Qui la differenza è chiara tra var e let e come differiscono gli scope

// IIFE
;(() => {
  // some initiation code
  let firstVariable
  let secondVariable
})()

// firstVariable and secondVariable will be discarded after the function is executed.

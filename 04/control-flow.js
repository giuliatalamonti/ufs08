////////////////////// IF ELSE ///////////////////////
let num = 4

if (num < 10) {
  console.log('Small')
} else if (num < 100) {
  console.log('Medium')
} else {
  console.log('Large')
}

// => Small

// in alcuni casi non è comodo usare if else. Esempio:
// invece che scrivere molti if else, si può usare un switch case
if (x === 'apple') console.log('This is an Apple')
else if (x === 'banana') console.log('This is a Banana')
else if (x === 'orange') console.log('This is an Orange')
else console.log('This is not a fruit')

///////////////////////// SWITCH CASE /////////////////////////
const fruit = 'apple'

switch (fruit) {
  case 'apple':
    console.log('This is an Apple')
    break
  case 'banana':
    console.log('This is a Banana')
    break
  case 'orange':
    console.log('This is an Orange')
    break
  case 'pear':
    console.log('This is a Pear')
    break
  default:
    console.log('This is not a fruit')
    break
}

///////////////////////// TERNARY OPERATOR /////////////////////////
// In questo caso è più compatto l'uso del ternary operator
const fuelLevel = 0.5
let toRefuel

if (fuelLevel < 0.5) {
  toRefuel = true
} else {
  toRefuel = false
}

//const toRefuel = fuelLevel < 0.5 ? true : false

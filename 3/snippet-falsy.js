let value = 0

if (value) {
  console.log('value is truthy')
} else {
  console.log('value is falsy')
}

let value1 = 0

if (new Boolean(value1)) {
  console.log('value is truthy')
} else {
  console.log('value is falsy')
}
// => value is truthy (new Boolean(value1) is an object)
// => value is falsy (Boolean(value1) is a function and returns a boolean)

let value2 = 0

if (new Boolean(value2) === true) {
  console.log('value is truthy')
} else {
  console.log('value is falsy')
}

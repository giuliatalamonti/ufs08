console.log(convertCelsiusToFarhenheit(2)) // 35
console.log(convertCelsiusToFarhenheitAnonymusFunc(2)) // reference error
console.log(convertCelsiusToFarhenheitArrowFunc(2)) // reference error

function convertCelsiusToFarhenheit(celsius) {
  if (celsius && typeof celsius === 'number') {
    return Math.ceil(celsius * 1.8 + 320)
  }
  throw new Error('Invalid Celsius Input')
}

let convertCelsiusToFarhenheitAnonymusFunc = function (celsius) {
  if (celsius && typeof celsius === 'number') {
    return Math.ceil(celsius * 1.8 + 320)
  }
  throw new Error('Invalid Celsius Input')
}

let convertCelsiusToFarhenheitArrowFunc = (celsius) => {
  if (celsius && typeof celsius === 'number') {
    return Math.ceil(celsius * 1.8 + 320)
  }
  throw new Error('Invalid Celsius Input')
}

// La prima dichiarazione essendo vista come una funzione viene portata in alto (hoisting)
// La seconda dichiarazione non viene attivata
// con var - la variabile viene portata in alto ma non viene inizializzata, con let abbiamo un reference error perchè la variabile non esiste

///// this e differenza tra arrow function e function
const jill = {
  name: 'Jill',
  someMethod() {
    function ordinaryFunc() {
      console.log(2, this.name)
    }
    ordinaryFunc()

    const arrowFunc = () => {
      console.log(3, this.name)
    }
    arrowFunc()
  },
}

jill.someMethod()

///// Anonymous function

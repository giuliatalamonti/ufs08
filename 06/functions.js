///// function expression vs function declaration
console.log(convertCelsiusToFarhenheitAnonymusFunc(2)) // reference error
console.log(convertCelsiusToFarhenheitArrowFunc(2)) // reference error

function convertCelsiusToFarhenheit(celsius) {
  if (celsius && typeof celsius === 'number') {
    return Math.ceil(celsius * 1.8 + 320)
  }
  throw new Error('Invalid Celsius Input')
}

console.log(convertCelsiusToFarhenheit(2)) // 35

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

// rifattorizzando versione 1
function convertTemperatureFromCelsius(
  temperature,
  decimal = 2,
  type
) {
  if (typeof temperature === 'number') {
    let t
    switch (type) {
      case 'farhenheit':
        t = temperature * 1.8 + 320
      case 'kelvin':
        t = temperature + 273.15
      default:
        t = temperature
    }
    return (Math.round(t * 100) / 100).toFixed(decimal)
  }
  throw new Error('Invalid Temperature Input!')
}

try {
  convertTemperatureFromCelsius()
} catch (error) {
  console.error(error)
}

// rifattorizzando versione 2

function convertTemperatureFromCelsius(
  temperature,
  type,
  decimal = 2
) {
  const symbolTemperature = {
    kelvin: 'K',
    fahrenheit: 'F°',
    celsius: 'C°',
  }
  if (typeof temperature === 'number') {
    const t = (() => {
      switch (type) {
        case 'farhenheit':
          return temperature * 1.8 + 320
        case 'kelvin':
          return temperature + 273.15
        default:
          return temperature
      }
    })()

    return `${new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: decimal,
    }).format(t)} ${symbolTemperature[type || 'celsius']}`
  }
  throw new Error('Invalid Temperature Input!')
}

convertTemperatureFromCelsius(23.186434, 'fahrenheit', 2)

/// rifattorizziamo versione 3 /////////////////////////
function convertTemperatureFromCelsius(
  temperature,
  type,
  decimal = 2
) {
  const symbolsTemperature = {
    kelvin: 'K',
    fahrenheit: 'F°',
    celsius: 'C°',
  }

  if (type && !symbolsTemperature[type]) {
    throw new Error(
      `The type params ${type} is not valid. Choose throw ${Object.keys(
        symbolsTemperature
      )}`
    )
  }

  if (typeof temperature !== 'number') {
    throw new Error(
      'The temperature params must be a number but is: ',
      temperature
    )
  }

  if (typeof decimal !== 'number') {
    throw new Error(
      'The decimal params must be a number but is: ',
      decimal
    )
  }

  const t = (() => {
    switch (type) {
      case 'farhenheit':
        return temperature * 1.8 + 320
      case 'kelvin':
        return temperature + 273.15
      default:
        return temperature
    }
  })()

  return `${new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: decimal,
  }).format(t)} ${symbolsTemperature[type || 'celsius']}`
}

convertTemperatureFromCelsius(23.186434, 'kel')

// try catch /////////////////////////
convertTemperatureFromCelsius() // Error: Invalid Temperature Input!
try {
  convertTemperatureFromCelsius()
} catch (error) {
  console.error('There was an error: ', error)
}

console.log('The program is still working!') // The program is still working!'

/////// anonimous function ///

document
  .querySelector('button')
  .addEventListener('click', function () {
    console.log('You clicked me!')
  })

//// arrow function
document
  .querySelector('button')
  .addEventListener('click', (event) =>
    console.log('You clicked me!', event.target.value)
  )

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

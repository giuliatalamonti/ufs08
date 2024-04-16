/////////////// For Loops ///////////////
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// /////////////// While Loops ///////////////
// il do - while viene eseguito almeno una volta per il resto il comportamento è del tutto simile
let i = 0

do {
  console.log(i)
  i++
} while (i < 5)

let j = 0

while (j < 5) {
  console.log(j)
  j++
}

// provate mettendo i = 6 e j = 6

////// for of loop
// un ciclo for of è un ciclo che itera su un oggetto iterabile (array, stringhe, map, set, etc)

// è possibile usare const nel for of, perchè ad ogni iterazione viene creata una nuova variabile

const array = ['ciao', 'amici']

const string1 = 'ciao amici'

for (const element of array) {
  console.log(element)
}

for (const element of string1) {
  console.log(element)
}

////// for in loop
// un ciclo for in è un ciclo che itera un oggetto e le sue chiavi

// esempio esercizio esempio 3
// document.getElementByClassName, restituisce un array-like object precisamente un HTMLCollection
// per poterla iterare posso sfruttare il for of loop

function hideTemperatureType(type) {
  const temperatureElements = document.getElementsByClassName(`temperature${type}`)

  for (const element of temperatureElements) {
    element.classList.add('hidden')
  }
}

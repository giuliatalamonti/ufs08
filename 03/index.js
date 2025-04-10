// creazione di un elemento
const h2Element = document.createElement('h2')

h2Element.innerText = 'Ciao'

console.log(h2Element)

// Restituisce una collezione (lista) HTMLCollection
// attenzione non è un array e non ha le stesse utility!!!
// const h1Element = document.getElementsByTagName('h1')

const h1Element = document.getElementById('h1Element')

console.log(h1Element)

h1Element.after(h2Element)
// Altre utility per poter inserire un elemento nel DOM in maniera programmatica
// h1Element.append(h2Element) -> viene inserito come figlio di h1
// h1Element.insertAdjacentHTML()
// h1Element.before()

// TODO
// Somma / Sottrazione / Divisione / Moltiplicazione

const temp = 12
const temp2 = 10

const sumResult = temp + temp2

document.getElementById('somma').innerText = sumResult

const substractionResult = temp - temp2
const divideResult = temp / temp2

document.getElementById('divisione').innerText = divideResult

// Dichiarare un BigInt

const bigIntExample = BigInt(9000000999999999999999999999999977)

const bigIntExample2 = 9000000999999999999999999999999977n

console.log(bigIntExample)
console.log(bigIntExample2)

// Math utility - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Concatenare due stringhe
const str1 = 'una stringa'
const str2 = "e un'altra ancora"

const strResult = str1 + '\n - \n' + str2

const strResult2 = `${str1} 

-

${str2}`

console.log(strResult)
console.log(strResult2)

document.getElementById('example-string').innerText = strResult2

// Dichiarazione di una funzione in javascript

function convertToF(tempC) {
  return (tempC * 9) / 5 + 32
}

const tempF = convertToF(MilanCelsius)

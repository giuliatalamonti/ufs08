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

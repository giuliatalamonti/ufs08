// Exercise: callback
// IT
// Implementate una funzione che si chiama forEach che ha come argomenti:
// - un array
// - una callback (funzione)
// La callback viene eseguita su ogni elemento dell' array
// Il forEach non ritorna nulla

// EN
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

// Esempio (Example):
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet);
// should output abcd

// Soluzione
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function map(arr, fn) {
  let n = []
  for (let i = 0; i < arr.length; i++) {
    n.push(fn(arr[i]))
  }
  return n
}

function executeOnElement(element) {
  console.log(element)
}

forEach(['pizza', 'pasta'], executeOnElement);

// ---
const letters = ["a", "b", "c", "d"];
let alphabet = "";

forEach(letters, function (char) {
  alphabet += char;
});

console.log('al', alphabet)

// Another reimplementation of a native Array method. Notice the difference with map, map returns an array, forEach doesn't return anything so whatever needs to happen needs to take place in the body of the callback function.

// PROMISE

// const getPockemon = fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")

// getPockemon.then((resultOk) => {
//   resultOk.json().then((result) => {
//     console.log(result.results)
//   })
// }).catch((error) => {
//   console.error(error)
// })


// const apromise = new Promise((resolve, reject) => {
//   const value = Math.floor(Math.random(1) * 1000)
//   let isOk = value % 2 === 0
//   if(isOk) resolve(value)
//   reject('Oh no!')
// })

// apromise.then((r) => {
//  console.log(r)
// }).catch((e) => {
//   console.log(e)
// })

// ASYNC AWAIT
const body = document.querySelector('body')
async function getPokemonList() {
  try {
     const result = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")

     const json = await result.json()

     json.results.map((pokemon) => {
       const eleHtml = document.createElement('p')
       eleHtml.innerText = pokemon.name
       body.appendChild(eleHtml)
     })
     return json
  } catch(e) {
    throw new Error(e)
  }
}


getPokemonList()

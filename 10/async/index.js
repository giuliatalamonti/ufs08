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
// function forEach(arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i])
//   }
// }

// function map(arr, fn) {
//   let n = []
//   for (let i = 0; i < arr.length; i++) {
//     n.push(fn(arr[i]))
//   }
//   return n
// }

// Esercizio promise

// 1 - creare una promise
// const aNewPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.ceil(Math.random() * 1000)

//   setTimeout(() => {
//     randomNumber % 2 === 0
//       ? resolve({ body: { result: randomNumber, isOdd: false } })
//       : reject(new Error('Number is odd :('))
//   }, 5000)
// })

// aNewPromise
//   .then((response) => {
//     const { body } = response
//     console.log(body)
//     console.log(body.result)
//     console.log(body.isOdd)
//   })
//   .catch((err) => console.error(err))

// 2. tornare dei dati da una API

// Promise based

;(async () => {
  async function getChuckNorrisRandomJoke() {
    const resultFetch = await fetch(
      'https://api.chucknorris.io/jokes/random?category=animal'
    )
    const randomJoke = await resultFetch.json()

    return randomJoke
  }

  try {
    const result = await getChuckNorrisRandomJoke()
    console.log(result)
  } catch (e) {
    console.error(e)
  }
})()

const divElm = document.getElementById('amiibo')

const resultFromAPICall = fetch(
  'https://amiiboapi.com/api/amiibo/?character=zelda'
)

resultFromAPICall
  .then((response) => {
    return response.json()
  })
  .then((finalResponse) => {
    console.log(finalResponse)

    finalResponse.amiibo.forEach((character) => {
      const imgElm = document.createElement('img')
      const pElm = document.createElement('p')
      imgElm.src = character.image
      imgElm.alt = character.name
      pElm.innerHTML = character.name
      divElm.append(imgElm)
      divElm.append(pElm)
    })
  })
  .catch((error) => {
    console.error('Error', error)
  })

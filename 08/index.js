const anchor = document.getElementsByTagName('a')
console.log(anchor)

// const r = Array.from(anchor)
// console.log(r)

anchor.item(0).addEventListener('click', (event) => {
  event.preventDefault()
  console.log(event.target)
})

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('Submitted!')
})

document.addEventListener('submit', (e) => {
  console.log('Submit on window')
})

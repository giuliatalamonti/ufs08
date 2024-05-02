const anchor = document.getElementsByTagName('a')
console.log(anchor)

// const r = Array.from(anchor)
// console.log(r)

anchor.item(0).addEventListener('click', (event) => {
  event.preventDefault()
  console.log(event.target)
})

const form = document.querySelector('form')
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')

form.addEventListener('submit', (e) => {

  if(!firstname.value && !lastname.value) {
    alert('Non hai inserito il nome')
  }

  // Prova dalla pagina a inserire dei valori per firstname e lastname commentando e rimuovendo il commento sulla riga preventDefault()
  // e.preventDefault()
  console.log('Submitted!')
})

window.addEventListener('DOMContentLoaded', () => {
  console.log('Dom content load')
})


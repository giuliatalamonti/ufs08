// load & DOMContentLoaded
// window.addEventListener('load', (event) => {
//   console.log(1, event)
// })

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log(2, event)
// })

const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')

const form = document.querySelector('form')
const msgError = document.createElement('p')

// Example Event capturing
document.addEventListener(
  'submit',
  (event) => {
    if (firstname.value === '' || lastname.value === '') {
      event.preventDefault()
      msgError.innerHTML = 'Non hai inserito nome o cognome!'
      document.querySelector('form').append(msgError)
    }
    console.log("Submit ascoltato nell'element document", event)
  },
  { capture: true }
)

form.addEventListener(
  'submit',
  (e) => {
    console.log("Submit ascoltato nell'elemento form")
  },
  { capture: true }
)

// Example bubbling (default)
// document.addEventListener(
//   'submit',
//   (event) => {
//     if (firstname.value === '' || lastname.value === '') {
//       event.preventDefault()
//       msgError.innerHTML = 'Non hai inserito nome o cognome!'
//       document.querySelector('form').append(msgError)
//     }
//     console.log("Submit ascoltato nell'element document", event)
//   }
// )

// form.addEventListener(
//   'submit',
//   (e) => {
//     console.log("Submit ascoltato nell'elemento form")
//   }
// )

// keypress event
firstname.addEventListener('keypress', (e) => {
  console.log('keypress', e.target.value)
  console.log(e)
})

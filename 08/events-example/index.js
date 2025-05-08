const btnElement = document.getElementById('btn')
const clickEventTarget = document.getElementById('clickElement')

btnElement.addEventListener('click', (event) => {
  console.log('Event', event)
})

clickEventTarget.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('Funziona diversamente da come funziona solitamente')
})

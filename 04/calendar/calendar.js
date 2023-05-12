const select = document.querySelector('select')
const list = document.querySelector('#month-view')
const h1 = document.querySelector('h1')

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

function createCalendar(days, choice) {
  list.innerHTML = ''
  h1.textContent = choice
  // Creare un ciclo for che cicli i giorni del mese
  for (let i = 1; i <= days; i++) {
    // Creare un elemento li
    const listItem = document.createElement('li')
    // Aggiungere il numero del giorno all'interno dell'elemento li
    listItem.textContent = i
    // Aggiungere l'elemento li creato al container ul
    list.appendChild(listItem)
  }
}

// Default calendar
createCalendar(31, 'january')

// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
select.addEventListener('change', function (event) {
  const actualYear = new Date().getFullYear()
  const month = months.findIndex((m) => m === event.target.value) + 1
  const numberOfDaysInAMonth = new Date(actualYear, month, 0).getDate() // 0 is the last day of the previous month

  createCalendar(numberOfDaysInAMonth, event.target.value)
})

// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina

// Button example
const button = document.querySelector('button')

function setColor(toRemove, toAdd) {
  document.getElementsByTagName('body')[0].classList.remove(toRemove)
  document.getElementsByTagName('body')[0].classList.add(toAdd)
}

function changeColor() {
  if (document.getElementsByTagName('body')[0].classList[0] === 'bodyColorLight') {
    button.innerHTML = 'Light mode'
    setColor('bodyColorLight', 'bodyColorDark')
  } else {
    button.innerHTML = 'Dark mode'
    setColor('bodyColorDark', 'bodyColorLight')
  }
}

// Color picker example
const colorPicker = document.querySelector('#colorpicker')

colorPicker.addEventListener('input', function (event) {
  document.body.style.backgroundColor = event.target.value
})

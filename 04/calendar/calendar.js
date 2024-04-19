const select = document.querySelector('select')

const list = document.querySelector('#month-view')

const h1 = document.querySelector('h1')

function resetDays() {
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
}

function resetDays2() {
  list.innerHTLM = ''
}

function onChangeSelect(event) {
  //console.log('Change event fired!', event.target.value)

  resetDays()

  h1.innerHTML = event.target.value

  if (event.target.value === 'january') {
    const JanuaryDays = 31
    for (let i = 1; i <= JanuaryDays; i++) {
      const day = document.createElement('li')

      console.log('day created', day)
      day.innerHTML = i
      list.appendChild(day)
    }
  }
}

select.addEventListener('change', onChangeSelect)

// select.addEventListener('change', function (event) {
//   console.log(event)
//   console.log('Change event fired!', event.target.value)
// })

// createCalendar(31, 'January')

// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina

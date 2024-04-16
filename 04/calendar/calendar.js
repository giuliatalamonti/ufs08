const select = document.querySelector('select')
const list = document.querySelector('#month-view')
const h1 = document.querySelector('h1')

function createCalendar(days, choice) {
  list.innerHTML = ''
  h1.textContent = choice
  // Creare un ciclo for che cicli i giorni del mese
}

select.addEventListener('change', function (event) {
  console.log('Change event fired!', event.target.value)
})

// createCalendar(31, 'January')

// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina

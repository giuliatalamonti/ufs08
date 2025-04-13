const select = document.querySelector('select')

const list = document.querySelector('#month-view')

const h1 = document.querySelector('h1')

const months = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
}

function resetDays() {
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
}

// Initial setup
setMonth('january')

function setMonth(month) {
  resetDays()

  // h1.innerHTML = month

  const days = months[month.toLowerCase()]
  for (let i = 1; i <= days; i++) {
    const day = document.createElement('li')

    list.classList = ''
    list.classList.add(month)

    day.innerHTML = `<div class="num_wrapper">${i}</div>`
    list.appendChild(day)
  }
}

function onChangeSelect(event) {
  setMonth(event.target.value)
}

select.addEventListener('change', onChangeSelect)

// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina

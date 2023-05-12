// Race day registration
// Let's race!
// There are adult runners (over 18 years of age) and youth runners (under 18 years of age).
// Runners are assigned a race number and start time based on their age and registration.

// Race number:
// Adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Each block of runners (adults and youth) will be assigned a specific time slot.

// Start time:
// First adults block run at 9:30 am.
// Second adults block run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

// 1. crea nell'html un elemento di tipo input di tipo testo per poter inserire il nome del runner, e l'età del runner, e un bottone di conferma
// 2. al click sul bottone di conferma, si deve mostrare un alert con il numero di partenza e l'orario di partenza del runner

// Alternativa alla soluzione con gli eventi su HTML come attributo onsubmit
// document.querySelector('form').addEventListener('submit', function setPartecipant(event) {
//   event.preventDefault()
//   console.log(1)
// })

function setPartecipant(event) {
  // il form di default fa il submit, quindi per evitare che si ricarichi la pagina, devo usare il metodo preventDefault
  event.preventDefault()

  let runner = { number: 0, name: '', age: 0, startTime: '9:30' }

  for (const input of document.querySelectorAll('#form input')) {
    if (input.name === 'age') {
      runner.age = input.value
    } else if (input.name === 'surname') {
      runner.name = input.value
    }
  }

  if (runner.age > 18) {
    runner.number = Math.floor(Math.random() * 1000) + 1000
    runner.startTime = runner.number % 2 === 0 ? '9:30' : '11:00'
  } else {
    runner.number = Math.floor(Math.random() * 1000)
    runner.startTime = '12:30'
  }

  alert(
    `Ciao ${runner.name} La tua partenza è alle ${runner.startTime} con il numero ${runner.number}`
  )
}

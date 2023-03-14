
var n = 1;

// Look at the difference of window object and document object
console.log(window)
console.log(document)

const anchor = document.getElementById('anchor-1')

function onClick() {
  n = n + 1;
  alert(`Hello you have clicked on the anchor ${n} times ${Intl.DateTimeFormat().format()}`)
}

anchor.addEventListener('click', onClick)

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

// insert a dynimic value in the html element p 
const htmlTagForDate = document.getElementById('date').innerHTML = Intl.DateTimeFormat('it-IT', options).format()

// create a new span element
const child = document.createElement('span')
// get the h1 element by id
const h1 = document.getElementById('maintitle')
// append a child to the h1 element
h1.appendChild(child).innerHTML = Intl.DateTimeFormat('it-IT', options).format()





  

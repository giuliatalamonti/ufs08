


// Look at the difference of window object and document object
console.log(window)
console.log(document)

// get the element by id anchor-1 and store it in a variable
const anchor = document.getElementById('anchor-1')
// initialize a variable n as a counter
var n = 1;
// handle the click event on the anchor element
function onClick() {
  alert(`Hello you have clicked on the anchor ${n} times ${Intl.DateTimeFormat().format()}`)
  n = n + 1;
}
// attach the event listener to the anchor element
anchor.addEventListener('click', onClick)


// Date format options 
const longMonthDateFormat = {
  year: "numeric",
  month: "long",
  day: "numeric",
}


// create a new span element
const newElement = document.createElement('span')
// get the h1 element
const body = document.getElementsByTagName('h1')[0]
// attach after the h1 element
body.after(newElement)

newElement.innerHTML = Intl.DateTimeFormat('it-IT', longMonthDateFormat).format()





  

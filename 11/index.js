const rangeElement = document.getElementById('range')

const rangeValue = document.getElementById('rangeValue')

// default
rangeValue.innerText = rangeElement.value

// on change
rangeElement.addEventListener('change',(event) => {
  rangeValue.innerText = event.target.value
})

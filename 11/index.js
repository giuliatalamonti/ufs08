const rangeElement = document.getElementById('range')

const rangeValue = document.getElementById('rangeValue')

// default
rangeValue.innerText = rangeElement.value

// on change
rangeElement.addEventListener('change', (event) => {
  rangeValue.innerText = event.target.value
})

// COLOR PICKER
const bdElement = document.querySelector('body')

const colorPicker = document.querySelector('#colorPicker')

colorPicker.addEventListener('change', (event) => {
  const newColor = event.target.value
  bdElement.style.setProperty('--bg-color', newColor)
})

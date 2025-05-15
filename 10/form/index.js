window.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  console.log(formData)
})

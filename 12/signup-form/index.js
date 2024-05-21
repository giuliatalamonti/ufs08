const signUpElement = document.querySelector('#signup')

const okMsgElement = document.querySelector('#okMsg')

signUpElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(signUpElement)

  okMsgElement.innerText = `Grazie 
  ${formData.get('firstname')} 
  per esserti registrato!
   Controlla la tua email: ${formData.get('email')}`

  // const msg =
  //   'Grazie' +
  //   formData.get('firstname') +
  //   'per esserti registrato! Controlla la tua email:' +
  //   formData.get('email')

  okMsgElement.innerHTML = msg
})

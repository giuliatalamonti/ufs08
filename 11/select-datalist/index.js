const dataListElm = document.getElementById('amiibo-characters')
const formElm = document.getElementById('amiibo-datalist-form')
const charactersToShowElm = document.getElementById('amiibo-result')

const charactersAmiibo = fetch('https://amiiboapi.com/api/character/')
  .then((res) => {
    return res.json()
  })
  .then((characters) => {
    characters.amiibo.forEach((character) => {
      const optionElm = document.createElement('option')
      optionElm.value = character.name
      optionElm.innerHTML = character.name
      dataListElm.appendChild(optionElm)
    })
  })
  .catch((error) => {
    console.error('Oh no, I cannot get the amiibo characters list:', error)
  })

formElm.addEventListener('submit', async (event) => {
  event.preventDefault()

  charactersToShowElm.innerHTML = '' // Reset

  const data = new FormData(event.target)

  try {
    const charactersToShow = await getCharactersByName(
      data.get('amiibo-character-selected')
    )

    charactersToShow.amiibo.forEach((c) => {
      const elm = document.createElement('div')
      const characterCard = `
      <div class="card">
        <h5 class="card__title">${c.name}</h5>
        <p class="card__p">${c.amiiboSeries}</p>
        <img class="card__img" src="${c.image}" alt="${c.name}" />
      </div>
    `
      elm.innerHTML = characterCard

      charactersToShowElm.appendChild(elm)
    })
  } catch (e) {
    console.error(e)
    charactersToShowElm.innerHTML = `<p class="error-msg">Ops qualcosa è andato storto!</p>`
  }
})

async function getCharactersByName(name) {
  const filteredCharacters = await fetch(
    `https://amiiboapi.com/api/amiibo/?character=${name}`
  )
  return await filteredCharacters.json()
}

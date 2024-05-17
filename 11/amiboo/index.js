const searchFormData =
  document.getElementById('searchForm')

const input =
  document.getElementById('search')

const button =
  document.querySelector('button')

const searchResult =
  document.getElementById(
    'resultSearch'
  )

searchFormData.addEventListener(
  'submit',
  (event) => {
    event.preventDefault()

    const data = new FormData(
      searchFormData
    )

    getAmibooByName(
      data.get('searchFormInput')
    )
  }
)

function getAmibooByName(nameToSearch) {
  // TODO: Validation nameToSearch
  if (nameToSearch) {
    fetch(
      `https://www.amiiboapi.com/api/amiibo/?name=${nameToSearch}`
    )
      .then((result) => {
        console.log(result)
        getAmibooByNameJson(
          result,
          searchResult
        )
      })
      .catch((e) => {
        console.error(e)
        throw new Error(
          'Error during get data from amiibo!'
        )
      })
  }
}

function getAmibooByNameJson(
  fetchResult,
  nodeToSetResult
) {
  fetchResult.json().then((result) => {
    result.amiibo.forEach((amiibo) => {
      const amiiboSearched =
        document.createElement('li')
      amiiboSearched.classList.add(
        'amiiboElementSearched'
      )
      amiiboSearched.innerText =
        amiibo.character
      nodeToSetResult.appendChild(
        amiiboSearched
      )
    })
  })
}

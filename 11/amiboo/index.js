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

    new FormData(searchFormData)
  }
)

searchFormData.addEventListener(
  'formdata',
  (event) => {
    console.log(event)

    // Convert FormData to an object
    const data = {}
    event.formData.forEach(
      (value, key) => {
        console.log(3, key, value)
        data[key] = value
      }
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
  console.log(fetchResult)
  fetchResult.json().then((result) => {
    console.log(2, result)
  })
}

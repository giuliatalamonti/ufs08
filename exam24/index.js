// 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=21&artistOrCulture=true&medium=Paintings&q=Dali'
// 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=19&q=Chabalgoity'
fetch('https://api.artic.edu/api/v1/artworks/search?q=flowers')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)

    if (result.objectIDs.length > 0) {
      // result.objectIDs.forEach((element) => {
      //   const newElement = document.createElement('li')
      //   const ulElem = document.querySelector('ul')
      //   fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + element)
      //     .then((response) => response.json())
      //     .then((result) => {
      //       console.log(2, result)
      //       console.log(3, result.primaryImage)
      //       if (result.primaryImage) {
      //         newElement.innerHTML = result.artistDisplayName
      //         const img = document.createElement('img')
      //         img.src = result.primaryImage
      //         img.classList.add('img')
      //         newElement.appendChild(img)
      //         ulElem.appendChild(newElement)
      //       }
      //     })
      // })
    }
  })

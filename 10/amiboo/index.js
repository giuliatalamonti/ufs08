function setAmiiboImage(amiibo) {
    amiibo.forEach((character) => {
        const img = document.createElement('img')

        img.src = character.image
        img.alt = character.name

        document.body.appendChild(img)
    })
}

document
    .querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault()

        const search = document.querySelector('input').value

        fetch(
            `https://www.amiiboapi.com/api/amiibo/?character=${search}`
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const { amiibo: amiiboCharacters } = data
                setAmiiboImage(amiiboCharacters)
            })
            .catch((error) => {
                console.error(error)
            })
    })

// Implementazione con async/await
//   ;(async () => {
//     function setAmibooImages(amiibo) {
//         amiibo.forEach((element) => {
//             const imageElement =
//                 document.createElement('img')
//             imageElement.src = element.image
//             imageElement.alt = element.name
//             document.body.appendChild(imageElement)
//         })
//     }
//     try {
//         const getAmiboo = await fetch(
//             'https://amiiboapi.com/api/amiibo/?character=zelda'
//         )
//         const { amiibo } = await getAmiboo.json()

//         setAmibooImages(amiibo)
//     } catch (error) {
//         console.error(error)
//     }
// })()

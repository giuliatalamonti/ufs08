// const getAmiboo = fetch(
//     'https://amiiboapi.com/api/amiibo/?character=zelda'
// )

// getAmiboo
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         if (data?.amiibo) {
//             const { amiibo: amiiboElement } = data
//             // const pippo = data.amiibo - sono equivalenti alla riga 15
//             setAmibooImages(amiiboElement)
//         }
//     })
//     .catch((error) => {
//         console.error(error)
//     })

// async - await

;(async () => {
    function setAmibooImages(amiibo) {
        amiibo.forEach((element) => {
            const imageElement =
                document.createElement('img')
            imageElement.src = element.image
            imageElement.alt = element.name
            document.body.appendChild(imageElement)
        })
    }
    try {
        const getAmiboo = await fetch(
            'https://amiiboapi.com/api/amiibo/?character=zelda'
        )
        const { amiibo } = await getAmiboo.json()

        setAmibooImages(amiibo)
    } catch (error) {
        console.error(error)
    }
})()

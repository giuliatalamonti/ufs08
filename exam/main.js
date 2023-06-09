const artistFeatured = [
    'Muse',
    'Anderson .Paak',
    'Florence and the Machine',
    'M83',
]

const artistsId = ['muse', 'paak', 'florence', 'm83']

const artistsFeaturedCalls = artistFeatured.map((artist) =>
    fetch(
        `https://rest.bandsintown.com/artists/${encodeURI(
            artist
        )}/events?app_id=1234&date=upcoming`
    )
)

Promise.all(artistsFeaturedCalls)
    .then((values) =>
        Promise.all(values.map((v) => v.json()))
    )
    .then((data) => {
        console.log(data)

        data.forEach((artistData, index) => {
            if (artistData[0]) {
                const img = artistData[0].artist.thumb_url
                const venue = artistData[0].venue.name
                const time = artistData[0].datetime
                const element =
                    document.createElement('img')
                element.setAttribute('src', img)
                element.setAttribute(
                    'alt',
                    artistFeatured[index]
                )

                document.querySelector(
                    `#${artistsId[index]} .featured-event__venue`
                ).innerText = venue

                document.querySelector(
                    `#${artistsId[index]} .featured-event__time`
                ).innerText = new Intl.DateTimeFormat(
                    'IT-it',
                    {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                    }
                ).format(new Date(time))

                document
                    .querySelector(
                        `#${artistsId[index]} .featured-event__img`
                    )
                    .appendChild(element)
            }
        })
    })
    .catch((e) => console.error(e))

document
    .querySelector('.nav-wrap__menuSmall')
    .addEventListener('click', () => {
        document.body.toggleAttribute('data-mobile')
    })

document
    .querySelector('.nav-wrap__close')
    .addEventListener('click', () => {
        document.body.toggleAttribute('data-mobile')
    })

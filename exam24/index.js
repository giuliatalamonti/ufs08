const cards = document.querySelector('.cards')
const artists = [
  'mika',
  'taylor swift',
  'fatboy slim',
  'coldplay',
  'Lenny Kravitz',
]

function createCard(cardToAppend, imgSrc, artistName, venueEvent, dateEvent) {
  const img = document.createElement('img')
  img.src = imgSrc
  img.alt = artistName.toUpperCase()

  const title = document.createElement('h6')
  title.classList.add('card__title')
  title.innerText = artistName

  const imgCardWrapper = document.createElement('div')
  imgCardWrapper.appendChild(img)
  imgCardWrapper.appendChild(title)

  const footerCardWrapElement = document.createElement('div')
  footerCardWrapElement.classList.add('card_footer')

  const venue = document.createElement('span')
  venue.classList.add('card__venue')
  venue.innerText = venueEvent

  const date = document.createElement('span')

  date.innerHTML = `<div class="card__date">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    
   <span>${new Intl.DateTimeFormat('en-US', {
     month: 'short',
     day: 'numeric',
     hour: '2-digit',
     minute: '2-digit',
   }).format(new Date(dateEvent))}</span></div>`

  cardToAppend.appendChild(imgCardWrapper)
  footerCardWrapElement.appendChild(venue)
  footerCardWrapElement.appendChild(date)
  cardToAppend.appendChild(footerCardWrapElement)

  return cardToAppend
}

artists.forEach((artist) => {
  const card = document.createElement('div')
  card.classList.add('card')

  fetch(
    `https://rest.bandsintown.com/artists/${encodeURI(
      artist
    )}/events?app_id=1234&date=upcoming`
  )
    .then((response) => response.json())
    .then((result) => {
      const latestEvents = result
      if (latestEvents.length > 0) {
        const upcomingEvent = latestEvents[0]

        const imgArtist = upcomingEvent?.artist?.thumb_url
        const venueEvent =
          upcomingEvent?.venue?.city + ', ' + upcomingEvent?.venue?.name
        const dateEvent = upcomingEvent?.datetime

        console.log(artist, imgArtist, venueEvent, dateEvent)

        const cardToAppend = createCard(
          card,
          imgArtist,
          artist,
          venueEvent,
          dateEvent
        )
        cards.appendChild(cardToAppend)
      }
    })
    .catch((e) => {
      console.error(e)
    })
})

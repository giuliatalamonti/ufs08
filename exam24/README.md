# Prova USF-08 Basi di sviluppo front-end del 21/05/2024

Il compito consiste nella realizzazione di una Homepage tramite HTML, CSS e Javascript di un sito di eventi musicali: MusicEvents.

## Design

Avete a disposizione il design della pagina in formato desktop e mobile nella cartella design:

- design-desktop.png
- design-mobile.png

Nella cartella del progetto troverete anche una cartella con gli assets:

- icone in svg

  Per le icone mancanti usate il sito di riferimento [BoxIcons](https://boxicons.com) oppure [feather icons](https://feathericons.com/)

La colore palette da seguire:

#### Primary Colors

- Electric Blue: #007BFF
  Use: Primary buttons, links, and highlights.
- Midnight Blue: #001F3F
  Use: Headers, primary text, and backgrounds for sections.

#### Secondary Colors

- Cool Grey: #AAAAAA
- Soft White: #F8F9FA

#### Accent Colors

- Sunset Orange: #FF4500
- Royal Purple: #6A0DAD

#### Neutral Colors

- Charcoal: #343A40
  Use: Text, subheadings, and icons.
- Light Grey: #D3D3D3
  Use: Backgrounds, dividers, and disabled states.

### Font:

https://fonts.google.com/specimen/Alef

## Sezione featured events

Dovrete recuperare le informazioni dei prossimi eventi sponsorizzati per degli artisti selezionati che sono:

- 'Mika'
- 'Taylor Swift'
- 'Coldplay'
- 'Fatboy Slim'

Chiamate l'API pubblica di artisti e eventi che trovate [qui](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0#/artist%20events)

In particolare dovrete recuperare l'immagine dell'artista `thumb_url`, il luogo dell'evento e la data.

Esempio di chiamata che vi restituirà i prossimi eventi per gli artisti elencati sopra:

```js
const artist = 'Mika'
fetch(`https://rest.bandsintown.com/artists/${encodeURI(artist)}/events?app_id=1234&date=upcoming`)
```

## Funzionalità & design

- i bottoni primary (quelli blue elettrico) all'hover devono avere l' effetto di sovraimpressione come qui: https://codepen.io/giuliatalamonti/pen/YzbqpbV

- i link del footer devono portare correttamente alle pagine social indicate e le informative privacy (https://corp.bandsintown.com/privacy) e cookie alla pagina (https://corp.bandsintown.com/cookie-policy)

## Bonus nella realizzazione

- l'input di ricerca non effettuerà la ricerca tra i vari eventi, ma deve essere correttamente impostato come un input con una serie di opzioni di alcune città da cui poter filtrare tramite un elemento <datalist>

- Gestione in mobile del menù hamburger, in modo che al click o touch dell'icona di menù si apra il menù di navigazione a tutto schermo con i link e i tasti di login e signup

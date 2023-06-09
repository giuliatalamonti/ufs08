# Prova USF-08 Basi di sviluppo front-end del 22/05/2023

Il compito consiste nella realizzazione di una Homepage tramite HTML, CSS e Javascript di un sito di eventi musicali: MusicEvents.

## Design

Avete a disposizione il design della pagina in formato desktop e mobile nella cartella design:

-   design-desktop.png
-   design-mobile.png

Nella cartella del progetto troverete anche una cartella con gli assets:

-   immagine di sfondo della Hero
-   icone in svg
-   il logo di MusicEvents
    Per le icone mancanti usate il sito di riferimento [BoxIcons](https://boxicons.com) oppure [feather icons](https://feathericons.com/)

La colore palette da seguire la potete recuperare da [qui](https://coolors.co/c7e8f3-bf9aca-8e4162-41393e-eda2c0)

Font:
Sottotitoli: https://fonts.google.com/specimen/Montserrat
Titoli: https://fonts.google.com/specimen/Josefin+Sans

## Sezione featured events

Dovrete recuperare le informazioni dei prossimi eventi sponsorizzati per degli artisti selezionati che sono:

-   Jennifer Lopez
-   Anderson .Paak
-   Florence and the Machine
-   M83

Chiamate l'API pubblica di artisti e eventi che trovate [qui](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0#/artist%20events)

In particolare dovrete recuperare l'immagine dell'artista `thumb_url`, il luogo dell'evento e la data.

Esempio di chiamata che vi restituirà i prossimi eventi per gli artisti elencati sopra:

```js
const artist = 'Jennifer Lopez'
fetch(
    `https://rest.bandsintown.com/artists/${encodeURI(
        artist
    )}/events?app_id=1234&date=upcoming`
)
```

## Bonus nella realizzazione

-   La sezione Tranding Geners in your town del design
-   Gestione in mobile del menù hamburger, in modo che al click o touch dell'icona di menù si apra il menù di navigazione a tutto schermo con i link e i tasti di login e signup

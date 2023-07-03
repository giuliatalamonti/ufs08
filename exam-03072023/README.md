# Prova USF-08 Basi di sviluppo front-end del 03/07/2023

Il compito consiste nella realizzazione di una homepage tramite HTML, CSS e Javascript di una mostra su opere d'arte _feline_: Feline Artworks Exhibition.

## Design

Avete a disposizione il design della pagina in formato desktop, che trovare nella cartella `design`

-   design-desktop.png

### Font

Il font da utilizzare è: [Syne](https://fonts.google.com/specimen/Syne)

Pesi da utilizzare:

-   400
-   500
-   600

### Palette colori

-   #FFFFFF (white)
-   #000000 (black)
-   #545454 (neutral-black)

## Informazioni e immagini delle opere d'arte

Dovrete recuperare le informazioni delle opere d'arte chiamando l'API apposita:

```js
fetch(`https://api.artic.edu/api/v1/artworks/${idArtwork}`)
```

Le informazioni da recuperare sono:

-   immagine dell'opera d'arte (`image_id` vedi sezione apposita URL img opere d'arte)
-   nome dell'opera d'arte (`title`)
-   nome dell'artista (`artist_title`)

Gli ID delle opere d'arte di cui recuperare le informazioni sono:

-   13914
-   51719
-   78503
-   16858

## URL img opere d'arte

Dalla API sulla singola opera d'arte recuperate `image_id` che vi permetterà di comporre l'indirizzo dell'immagine dell'opera d'arte.

Di seguito un esempio:

```html
<!-- Esempio di url di una immagine di un'opera d'arte -->
<!-- 63f49f6d-020e-1d54-d11d-ed027d5e1bd8 è l'image_id -->
<img
    src="https://www.artic.edu/iiif/2/63f49f6d-020e-1d54-d11d-ed027d5e1bd8/full/300,/0/default.jpg"
/>
```

**Nota Bene**

Potete modificare la dimensione dell'immagine dalla chiamata API (la size è l'unico parametro che vi interessa):

_Composizione dell'URL di una immagine_

```
https://www.artic.edu/iiif/2/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
```

#### Documentazione API

-   [Per le immagini delle opere d'arte](https://api.artic.edu/docs/#iiif-image-api)
-   [Documentazione della API delle opere d'arte](https://api.artic.edu/docs/#quick-start)

**Tip**
Per le immagini sfruttate la proprietà CSS `object-fit` in modo da poter otterere le proporzioni corrette.

## Bonus nella realizzazione

-   Applicare nelle prime tre immagini una animazione al momento dell'hover del cursore sulla stessa, creando (potete vedere un esempio nella terza immagine del design fornitovi) un'ombra solida.

Un esempio:

![Esempio effetto ombra solida](hover-effect.gif)

```

```

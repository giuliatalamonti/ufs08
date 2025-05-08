# Un sito web vetrina Anchor Green Tech

Sviluppate una pagina web di homepage di un sito come da design che trovate nel file: `mid-term-08-05-25.pdf`

## Font family

Montserrat (https://fonts.google.com/specimen/Montserrat)
Includetelo nel vostro sito nella modalità che preferite: https://fonts.google.com/selection/embed

## Palette colori

I colori utilizzati nel design sono:

- celeste: #9bc53d (per il menu di navigazione)
- arancio: #e55934 (per la fascia in basso)
- blu scuro: #006E9D (hover bottoni)
- grigio chiaro: #E3E3E3 (per i link all'hover)
- grigio scuro: #373737 (testi, buttoni)

## Funzionalità

- Tutti i link devono diventare bianchi all'hover
- I link `Contact` devono aprire il client email
- Al click del bottone `Get in touch` deve aprirsi un alert che mostra "Thanks, if you're interested, send an email"
- Usare flex per posizionare le card contenente i piani di costo del prodotto e anche per posizionare correttamente i prodotti aggiuntivi

## 💡 Bonus 

Alla fine della homepage, crea una sezione interattiva contenente un mini quiz a risposta multipla. Il quiz aiuterà gli utenti a capire qual è il piano più adatto alle loro esigenze.

### 🎯 Obiettivo
Aggiungere alla pagina una sezione con:
- 3 domande a risposta multipla (una sola risposta corretta per ciascuna).
- Un bottone per inviare le risposte.
- Alla fine, mostrare il punteggio totale e un messaggio personalizzato in base al risultato.

#### HTML
- Ogni domanda deve essere contenuta in un elemento `fieldset`.
- Le risposte devono essere `radio button`, con una sola selezionabile per domanda.
- Deve esserci un bottone per inviare il quiz (es. “Check Result”).

Il contenuto del quiz è: 
Mini Quiz: Is Anchor Green Right for You?
1. What’s your main goal for building a website?
- Just to have an online presence
- Attract new customers
- Sell products online
2. How much experience do you have with web design?
- None at all
- I’ve edited templates before
- I’ve built full websites
3. What kind of support do you expect from your platform?
- Occasional help via email
- Regular guidance and fast replies
- A dedicated person I can contact anytime

#### JavaScript
- Al click sul bottone, calcola il punteggio totale:
  - Risposte di tipo A = 1 punto
  - Risposte di tipo B = 2 punti
  - Risposte di tipo C = 3 punti
- Mostra un messaggio all’utente con il punteggio e il consiglio sul piano da scegliere:
  - **3–6 punti** → Starter Plan consigliato
  - **7–9 punti** → Business Plan consigliato

#### UX/UI
- Il risultato va mostrato nella stessa sezione, sotto il quiz.
- Non è necessario ricaricare la pagina.
- Cura il layout: usa margini, padding e stile coerente con il resto del sito.
- Disabilita il bottone finché tutte le domande non sono completate.
- Aggiungi una piccola animazione (es. fade-in) al risultato.

## Cosa valuterò

- La struttura dell'HTML deve sfruttare i tag semanticamente corretti per i vari blocchi individuabili della pagina
- L'utilizzo del CSS tramite un foglio di stile, usando i selettori visti (classi, selettori di attributo, pseudo classi)
- Il bonus è un plus per chi riesce a completare l'esercizio in anticipo

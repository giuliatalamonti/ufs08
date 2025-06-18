# 🧪 Esercizio Frontend – Random User Page

## 🎯 Obiettivo

Realizzare una **pagina web** che mostri i dati di un utente casuale ottenuto tramite un’**API pubblica**.

---

## ✅ Requisiti

### 1. HTML – Struttura Semantica (`index.html`)

La pagina deve essere composta da elementi HTML semantici che rispecchino la struttura dei contenuti.

---

### 2. CSS – Stile Base (`style.css`)

### Fonts

- **Poppins** (Google Font)

  - Weights: 400, 600, 700, 800
  - Usage: Headings, titles, user names, section headers
  - Variable: `--font-poppins`

- **Inter** (Google Font)
  - Weights: 400, 500, 600
  - Usage: Body text, labels, descriptions, contact information
  - Variable: `--font-inter`

### Font Applications

- Main title "Random User": Poppins (bold)
- User names: Poppins (bold)
- Section headings: Poppins (semibold)
- Body text and labels: Inter
- Footer text: Inter

### Main Colors

| Color Name | Suggested variable name | Hex Code | Usage                   |
| ---------- | ----------------------- | -------- | ----------------------- |
| Pink       | pink-400                | #F472B6  | Main background start   |
| Purple     | purple-500              | #A855F7  | Main background middle  |
| Orange     | orange-400              | #FB923C  | Main background end     |
| Emerald    | emerald-400             | #34D399  | Header background start |
| Cyan       | cyan-400                | #22D3EE  | Header background end   |
| Violet     | violet-500              | #8B5CF6  | Profile header start    |
| Fuchsia    | fuchsia-500             | #D946EF  | Profile header end      |
| White      | white                   | #FFFFFF  | Text and backgrounds    |

### Icons

Usa https://feathericons.com per recuperare le varie icone e importale nel progetto

---

### 3. JavaScript – Chiamata API (`script.js`)

Al caricamento della pagina:

- Esegui una chiamata a questa API:

```
https://randomuser.me/api/
```

- Estrai e mostra le seguenti informazioni:

**Profile Header**

- `name.title` - User's title (Mr, Ms, etc.)
- `name.first` - First name
- `name.last` - Last name
- `picture.large` - Profile photo URL
- `gender` - Gender for badge

**Contact Information**

- `email` - Email address
- `phone` - Phone number
- `cell` - Cell phone number

**Personal Information**

- `dob.date` - Birth date (ISO string)
- `dob.age` - Age in years
- `location.street.number` - Street number
- `location.street.name` - Street name
- `location.city` - City name
- `location.state` - State/province
- `location.country` - Country name
- `location.postcode` - Postal code
- `nat` - Nationality code

- Al clic sul bottone "Carica un nuovo utente", aggiorna i dati con un nuovo utente casuale.

---

## 🧪 Suggerimenti tecnici

- Usa `fetch()` per richiedere i dati
- Manipola il DOM con `document.querySelector()` e `innerText` o `innerHTML`
- Stampa i dati nella console per controllare il formato

## Bonus

- Rendi il sito responsive (vedi screenshot mobile)

---

## 📦 Consegna

1. Condividi la cartella con il tuo cognome all'interno del drive delle consegne condivise Esame di recupero 18/06/2025

---

Buon lavoro e in bocca al lupo! 🚀

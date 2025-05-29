# 💌 Wedding RSVP Form - Rick and Morty Edition

Benvenuto nel progetto RSVP per un matrimonio davvero... interdimensionale! 🎉  
Solo le invitate speciali — le donne umane vive dell'universo di _Rick and Morty_ — possono accedere a questo form per confermare (o meno) la loro partecipazione.

---

## 🎯 Obiettivo

Realizzare un form RSVP per il matrimonio di Unity e Birdperson in cui:

- Solo le **inviate** specifiche possono accedere (ottenute dall’API `https://rickandmortyapi.com/api/character?status=alive&species=human&gender=female`)
- Gli invitati possono **confermare o rifiutare** la loro presenza
- Se confermano, devono completare ulteriori dettagli richiesti

---

## 🧪 Verifica dell’invitato

L'utente inserisce il proprio **nome e cognome** (come `name` restituito dall’API).  
⚠️ Attenzione: il confronto deve essere **case-insensitive**, quindi uniforma con `lowercase()` o `capitalize()` per verificare la corrispondenza.

---

## 🧾 Struttura del form

### 1. Identificazione

- **Campo testo:** Nome completo (`first name + last name`)

### 2. Conferma partecipazione

- **Radio buttons**:
  - `Yes, I will be there`
  - `Sorry, I can’t come`

---

## ✅ Se il nome coincide **e** la persona conferma la partecipazione:

Mostrare un secondo blocco di form con i seguenti campi:

### 🧍 Numero di ospiti

- **Input numerico** – `REQUIRED`

### 🏛️ Partecipazione alla cerimonia

- **Select (menù a tendina)** – `REQUIRED`
  - Only the Church ceremony
  - Church & Lunch
  - Party
  - All the ceremony

### 🍽️ Preferenze alimentari e allergie

- **Datalist (campo testo con opzioni suggerite)** – `REQUIRED`
  - Eat everything and the impossible
  - Vegetarian
  - Vegan
  - Halal
  - Kosher
  - Hindu/Asian Vegetarian
  - Low-Fat
  - Low-Salt
  - Diabetic
  - Gluten-Intolerant/Gluten-Free
  - Lactose-Intolerant/Lactose-Free
  - Baby/Child Meals

### 💬 Messaggio speciale

- **Textarea** – `OPTIONAL` (max 300 caratteri)
  Un messaggio per gli sposi 🥰

---

## ❌ Se il nome **non coincide** con la lista degli invitati:

Mostrare il messaggio:

> **Sorry, something went wrong**

---

## 💔 Se il nome coincide ma l'invitata **non partecipa**:

Mostrare il messaggio:

> **We're sorry you can't make it, but we’ll be thinking of you on our special day! Thank you for letting us know — your well wishes mean the world to us.**

---

## 🔧 Tecnologie consigliate

- HTML5 / CSS3
- Vanilla JS
- Fetch API per chiamare l’endpoint Rick and Morty

---

## 📦 Esempio di chiamata API

```http
GET https://rickandmortyapi.com/api/character?status=alive&species=human&gender=female
```

## Font utilizzati

[Pacifico](https://fonts.google.com/specimen/Pacifico?query=Pacifico)
[Raleway](https://fonts.google.com/specimen/Raleway)

## Color Palette

| Nome                      | Colore | Codice HEX |
| ------------------------- | ------ | ---------- |
| **Terracotta**            | 🧡     | `#E2725B`  |
| **Blu Petrolio Profondo** | 💙     | `#2C3E50`  |
| **Avorio Polveroso**      | 🤍     | `#F3EFE4`  |
| **Verde Salvia**          | 🌿     | `#9CAF88`  |

Note: Il testo del luogo e il sottotitolo hanno una opacità del 30%.

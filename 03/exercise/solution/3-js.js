// Nel mondo oggi ci sono queste temperature per Milano, Bangkok e Los Angeles in gradi Celsius.
const MilanCelsius = 20
const BangkokCelsius = 35
const LosAngelesCelsius = 15

// 1. Scrivi il codice che converte le temperature in gradi Fahrenheit e Kelvin
// 2. Aggiungi il valore delle varie temperature a ogni elemento dell'HTML che trovi con l'id temperatureItaly, temperatureThailand, temperatureUSA
// 3. Le temperature mostrate nell'HTML dovranno avere anche il relativo simbolo di misura (°C, F, K)
// 4. Arrotonda per eccesso le temperature in gradi Fahrenheit e Kelvin
// 5. Metti in evidenza con colori diversi le temperature nei vari gradi
// 6. Implementa al click della città il redirect sul sito della meteo di quella città (esempio: https://www.meteo.it/)
// ADVANCED
// 7. aggiungi un'immagine di sfondo che rappresenti la città selezionata
// 8. aggiungi un menù a tendina con cui mostrare in base alla scelta la temperatura in gradi Celsius, Fahrenheit o Kelvin

//T(°C) = T(K) - 273.15
function convertCelsiusToKelvin(celsius) {
  if (celsius && typeof celsius === 'number') {
    return Math.ceil(celsius + 273.15)
  }
  throw new Error('Invalid Celsius Input')
}

// T(°F) = T(°C) × 1.8 + 32
function convertCelsiusToFarhenheit(celsius) {
  if (celsius && typeof celsius === 'number') {
    return Math.ceil(celsius * 1.8 + 320)
  }
  throw new Error('Invalid Celsius Input')
}

const fahrenheitMilanoTemp = convertCelsiusToFarhenheit(MilanCelsius)
const fahrenheitBangkokTemp = convertCelsiusToFarhenheit(BangkokCelsius)
const fahrenheitLosAngelesTemp = convertCelsiusToFarhenheit(LosAngelesCelsius)

const kelvinMilanoTemp = convertCelsiusToKelvin(MilanCelsius)
const kelvinBangkokTemp = convertCelsiusToKelvin(BangkokCelsius)
const kelvinLosAngelesTemp = convertCelsiusToKelvin(LosAngelesCelsius)

const temperatureMilanCelsius = document.getElementById('temperatureItalyCelsius')
temperatureMilanCelsius.innerHTML = `${MilanCelsius}°C`

const temperatureMilanKelvin = document.getElementById('temperatureItalyKelvin')
temperatureMilanKelvin.innerHTML = `${kelvinMilanoTemp}K`

const temperatureMilanFahrenheit = document.getElementById('temperatureItalyFahrenheit')
temperatureMilanFahrenheit.innerHTML = `${fahrenheitMilanoTemp}F`

const temperatureBangkokCelsius = document.getElementById('temperatureBangkokCelsius')
temperatureBangkokCelsius.innerHTML = `${BangkokCelsius}°C`

const temperatureBangkokKelvin = document.getElementById('temperatureBangkokKelvin')
temperatureBangkokKelvin.innerHTML = `${kelvinBangkokTemp}K`

const temperatureBangkokFahrenheit = document.getElementById('temperatureBangkokFahrenheit')
temperatureBangkokFahrenheit.innerHTML = `${fahrenheitBangkokTemp}F`

const temperatureLosAngelesCelsius = document.getElementById('temperatureLosAngelesCelsius')
temperatureLosAngelesCelsius.innerHTML = `${LosAngelesCelsius}°C`

const temperatureLosAngelesKelvin = document.getElementById('temperatureLosAngelesKelvin')
temperatureLosAngelesKelvin.innerHTML = `${kelvinLosAngelesTemp}K`

const temperatureLosAngelesFahrenheit = document.getElementById('temperatureLosAngelesFahrenheit')
temperatureLosAngelesFahrenheit.innerHTML = `${fahrenheitLosAngelesTemp}F`

const selectElement = document.getElementById('selectTemperature')

// 7
function activeTemperatureType(type) {
  const temperatureElements = document.getElementsByClassName(`temperature${type}`)

  for (const element of temperatureElements) {
    element.classList.remove('hidden')
  }
}

function hideTemperatureType(type) {
  const temperatureElements = document.getElementsByClassName(`temperature${type}`)

  for (const element of temperatureElements) {
    element.classList.add('hidden')
  }
}

// Il valore di default è Celsius per la vista
activeTemperatureType('Celsius')

selectElement.addEventListener('change', (event) => {
  if (event.target.value === 'celsius') {
    activeTemperatureType('Celsius')
    hideTemperatureType('Fahrenheit')
    hideTemperatureType('Kelvin')
  }

  if (event.target.value === 'fahrenheit') {
    activeTemperatureType('Fahrenheit')
    hideTemperatureType('Celsius')
    hideTemperatureType('Kelvin')
  }

  if (event.target.value === 'kelvin') {
    activeTemperatureType('Kelvin')
    hideTemperatureType('Fahrenheit')
    hideTemperatureType('Celsius')
  }
})

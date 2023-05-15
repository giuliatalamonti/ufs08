const today = new Date()
const christmas = new Date(today.getFullYear(), 11, 25)
const days = dateFns.differenceInCalendarDays(
    christmas,
    today
)

const daysToChristmas = document.createElement('p')
daysToChristmas.innerText = `There are ${days} days to Christmas!`

document.body.appendChild(daysToChristmas)

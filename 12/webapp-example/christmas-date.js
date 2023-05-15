import {
    differenceInCalendarDays,
    differenceInBusinessDays,
} from 'date-fns'

const christmasDays = (element) => {
    const today = new Date()
    const christmas = new Date(today.getFullYear(), 11, 25)
    const daysTotal = differenceInCalendarDays(
        christmas,
        today
    )
    const daysBusiness = differenceInBusinessDays(
        christmas,
        today
    )

    element.innerHTML = `There are ${daysTotal} days to Christmas, and there are ${daysBusiness} business days to Christmas 🎅`
}

export { christmasDays }

const durationFormat = (interval: number, type: string) => {
  return `il y a ${Math.floor(interval)} ${type}${
    Math.floor(interval) > 1 ? 's' : ''
  }`
}

const fromNow = (date: Date) => {
  const seconds = Math.floor(
    ((new Date() as any) - (new Date(date) as any)) / 1000
  )

  let interval = seconds / 31536000

  if (Math.floor(interval) >= 1) {
    return durationFormat(interval, 'an')
  }

  interval = seconds / 2592000
  if (Math.floor(interval) >= 1) {
    return `il y a ${Math.floor(interval)} mois`
  }

  interval = seconds / 86400
  if (Math.floor(interval) >= 1) {
    return durationFormat(interval, 'jour')
  }

  interval = seconds / 3600
  if (Math.floor(interval) >= 1) {
    return durationFormat(interval, 'heure')
  }

  interval = seconds / 60
  if (Math.floor(interval) >= 1) {
    return durationFormat(interval, 'minute')
  }

  return `à l'instant`
}

/**
 * Parse the given string time to a date.Time must have `hh:mm:ss` format
 * @param time time to parse
 * @param date date to which the time will be set once parsed. If null, today's date is used
 */
const parseTimeToDate = (time: string, date?: Date) => {
  const dateToSet = date || new Date()
  const timeParts = time.split(':').map((t) => Number(t) || 0)

  dateToSet.setHours(timeParts[0], timeParts[1], timeParts[2] || 0)

  return dateToSet
}

const formatShortDate = (date: any, locale?: string) => {
  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export { fromNow, parseTimeToDate, formatShortDate }

import { parseTimeToDate } from '../../../utils'
import { RestaurantStatus, Schedule } from './restaurantSlice'

const days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
] as const

export type Day = typeof days[number]

export type OpeningInfo = {
  isOpen: boolean
  openAtDate?: Date
  openAtTime?: string
  closeAt?: string
}

const daysFrom = (day: number) => {
  const result: Day[] = []
  const startDay = day

  for (let i = 0; i < days.length; i += 1) {
    if (startDay + i > 6) {
      result.push(days[startDay + i - 7])
    } else result.push(days[startDay + i])
  }

  return result
}

const daysFromToday = daysFrom(new Date().getDay())

const getDayName = (day: Day, locale?: string) => {
  const dayNum = days.indexOf(day)
  const date = new Date()
  const offset = dayNum - date.getDay()

  date.setDate(date.getDate() + offset)

  return date.toLocaleString(locale, { weekday: 'long' })
}

const getNextOpeningDay = (schedules: Schedule[]) => {
  for (let i = 0; i < days.length; i += 1) {
    const nextDay = daysFromToday[i]
    const nextSchedule = schedules.find((s) => s.day === nextDay)

    if (nextSchedule) return nextSchedule
  }

  return undefined
}

const getOpeningInfo = (schedules: Schedule[]) => {
  const statusInfo: Omit<OpeningInfo, 'isOpen'> = {}
  const nextSchedule = getNextOpeningDay(schedules)

  if (nextSchedule) {
    statusInfo.openAtTime = nextSchedule.start
    const offset = daysFromToday.findIndex((d) => d === nextSchedule.day)

    if (offset > 1) {
      const nextDate = new Date()

      nextDate.setDate(nextDate.getDate() + offset)

      statusInfo.openAtDate = nextDate
    }
  }

  return statusInfo
}

const getScheduleStatusInfo = (schedules: Schedule[], open = true) => {
  const day = days[new Date().getDay()]
  const schedule = schedules.find((s) => s.day === day)
  let statusInfo: OpeningInfo = { isOpen: open }

  if (!schedule || !open) {
    if (!open) {
      const _schedules = schedules.filter((s) => s.day !== schedule?.day)

      statusInfo = { isOpen: false, ...getOpeningInfo(_schedules) }
    } else {
      statusInfo = { isOpen: false, ...getOpeningInfo(schedules) }
    }

    return statusInfo
  }

  const beginDate = parseTimeToDate(schedule.start)
  const endDate = parseTimeToDate(schedule.end)
  const now = new Date().getTime()

  if (beginDate.getTime() <= now && now <= endDate.getTime()) {
    statusInfo = { isOpen: true, closeAt: schedule.end }
  } else if (schedule.day === days[new Date().getDay()]) {
    const _schedules = schedules.filter((s) => s.day !== schedule?.day)

    statusInfo = { isOpen: false, ...getOpeningInfo(_schedules) }
  } else {
    statusInfo = { isOpen: false, ...getOpeningInfo(schedules) }
  }

  return statusInfo
}

type RestaurantStatusOpions = {
  schedules: Schedule[]
  open?: boolean
  t?: any
  locale?: string
}

const getRestaurantStatus = (
  opts: RestaurantStatusOpions
): RestaurantStatus => {
  const { schedules, open = true, locale } = opts

  const { openAtDate, isOpen, openAtTime, closeAt } = getScheduleStatusInfo(
    schedules,
    open
  )

  if (openAtDate) {
    const localizedDay = openAtDate.toLocaleString(locale, { weekday: 'long' })

    return { isOpen, statusText: `Opens ${localizedDay} at ${openAtTime}` }
  }
  if (openAtTime) {
    return { isOpen, statusText: `Closes at ${openAtTime}` }
  }
  if (closeAt) {
    return { isOpen, statusText: `Closes at ${closeAt}` }
  }

  return { isOpen, statusText: 'Opening date not available' }
}

export { days, daysFromToday, daysFrom, getRestaurantStatus, getDayName }

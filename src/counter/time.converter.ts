export const msToSeconds = (ms: number) => ms / 1000
export const msToMinutes = (ms: number) => msToSeconds(ms) / 60
export const msToHours = (ms: number) => msToMinutes(ms) / 60
export const msToDays = (ms: number) => msToHours(ms) / 24


export const secondsToMs = (s: number) => s * 1000
export const minutesToMs = (m: number) => secondsToMs(m * 60)
export const hoursToMs = (h: number) => minutesToMs(h * 60)
export const daysToMs = (d: number) => hoursToMs(d * 24)

const diff = (refDate: Date, date: Date): number => refDate.getTime() - date.getTime()

const diffDays = (refDate: Date, date: Date): number => {
  const delta = diff(refDate, date)
  return msToDays(delta)
}

export const integerDiffDays = (refDate: Date, date: Date): number => Math.trunc(diffDays(refDate, date))

const diffHours = (refDate: Date, date: Date): number => {
  const days = diffDays(refDate, date)
  const decimal = days - Math.trunc(days)
  return msToHours(daysToMs(decimal))
}

export const integerDiffHours = (refDate: Date, date: Date): number => Math.trunc(diffHours(refDate, date))

const diffMinutes = (refDate: Date, date: Date): number => {
  const hours = diffHours(refDate, date)
  const decimal = hours - Math.trunc(hours)
  return msToMinutes(hoursToMs(decimal))
}

export const integerDiffMinutes = (refDate: Date, date: Date): number => Math.trunc(diffMinutes(refDate, date))

const diffSeconds = (refDate: Date, date: Date): number => {
  const minutes = diffMinutes(refDate, date)
  const decimal = minutes - Math.trunc(minutes)
  return msToSeconds(minutesToMs(decimal))
}

export const integerDiffSeconds = (refDate: Date, date: Date): number => Math.trunc(diffSeconds(refDate, date))


export const getSeconds = (refDate: Date, date: Date): number => {
  return Math.trunc(msToSeconds(diff(refDate, date)))
}


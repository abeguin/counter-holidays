import * as React from "react"
import { useEffect, useState } from "react"
import { integerDiffDays, integerDiffHours, integerDiffMinutes, integerDiffSeconds } from "./time.converter"

type CounterProps = {
  refDate: Date
}

const Counter: React.FC<CounterProps> = ({ refDate }) => {
  //const [ refDate, setRefDate ] = useState(new Date(2021, 11, 13, 15, 0, 0, 0))
  const [ days, setDays ] = useState(1)
  const [ hours, setHours ] = useState(12)
  const [ minutes, setMinutes ] = useState(25)
  const [ seconds, setSeconds ] = useState(20)

  useEffect(() => {
    setDays(integerDiffDays(refDate, new Date()))
  })

  useEffect(() => {
    setHours(integerDiffHours(refDate, new Date()))
  })

  useEffect(() => {
    setMinutes(integerDiffMinutes(refDate, new Date()))
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(integerDiffSeconds(refDate, new Date()))
    }, 500)

    return () => clearInterval(interval)
  }, [])


  return (
    <div>
      <span>{days}</span><span> days</span>,
      <span>{hours}</span><span> hours</span>,
      <span>{minutes}</span><span> minutes</span>,
      <span>{seconds}</span><span> seconds</span>
    </div>
  )
}

export default Counter

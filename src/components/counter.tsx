import * as React from "react"
import { useState } from "react"

const Counter: React.FC = () => {
  const [ days, setDays ] = useState(1)
  const [ hours, setHours ] = useState(12)
  const [ minutes, setMinutes ] = useState(25)
  const [ seconds, setSeconds ] = useState(20)


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

import * as React from "react"
import { useEffect, useState } from "react"
import { integerDiffDays, integerDiffHours, integerDiffMinutes, integerDiffSeconds } from "./time.converter"
import Digit from "../components/digit"
import tw from "twin.macro"

type CounterProps = {
  refDate: Date
}

const Container = tw.div`flex`

const Counter: React.FC<CounterProps> = ({ refDate }) => {
  //const [ refDate, setRefDate ] = useState(new Date(2021, 11, 13, 15, 0, 0, 0))
  const [ days, setDays ] = useState(0)
  const [ hours, setHours ] = useState(0)
  const [ minutes, setMinutes ] = useState(0)
  const [ seconds, setSeconds ] = useState(0)

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
    <Container>
      <Digit label={"Jours"}>{days}</Digit>
      <Digit label={"Heures"}>{hours}</Digit>
      <Digit label={"Minutes"}>{minutes}</Digit>
      <Digit label={"Secondes"}>{seconds}</Digit>
    </Container>
  )
}

export default Counter

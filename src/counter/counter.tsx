import * as React from "react"
import { useEffect, useState } from "react"
import { getSeconds, integerDiffDays, integerDiffHours, integerDiffMinutes, integerDiffSeconds } from "./time.converter";
import Digit from "../components/digit"
import tw from "twin.macro"

type CounterProps = {
  refDate: Date
}

const Container = tw.div`flex mx-2 lg:mx-8`

const Counter: React.FC<CounterProps> = ({ refDate }) => {
  //const [ refDate, setRefDate ] = useState(new Date(2021, 11, 13, 15, 0, 0, 0))
  const [ seconds, setSeconds ] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(getSeconds(refDate, new Date()))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <Digit label={"Secondes"}>{seconds}</Digit>
    </Container>
  )
}

export default Counter

import tw from "twin.macro"
import * as React from "react"

const Container = tw.div`flex flex-col items-center justify-center`
const Label = tw.div`text-sm lg:text-2xl my-4`
const StyledDigit = tw.div`text-base lg:text-7xl w-24 lg:w-72 h-12 lg:h-36 mx-2 lg:mx-4 border-solid border-gray-200 flex items-center justify-center shadow-md rounded-2xl`


type DigitProps = {
  label: string;
  children?: React.ReactNode;
}

const Digit: React.FC<DigitProps> = ({
  label,
  children
}: DigitProps) => (
  <Container>
    <Label>{label}</Label>
    <StyledDigit className={"digit"}>
      {children}
    </StyledDigit>
  </Container>
)

export default Digit

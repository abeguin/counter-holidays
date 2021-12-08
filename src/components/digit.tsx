import tw from "twin.macro"
import * as React from "react"

const Container = tw.div`flex flex-col items-center justify-center`
const Label = tw.div`text-2xl`
const StyledDigit = tw.div`text-7xl w-36 h-36 mx-4 border-solid border-gray-500 text-center align-middle`


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
    <StyledDigit className={'digit'}>
      {children}
    </StyledDigit>
  </Container>
)

export default Digit

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Counter from "../counter/counter"
import tw from "twin.macro"

import Holidays from "../assets/holidays.png"

const CounterContainer = tw.div`flex flex-col h-full w-full items-center justify-center`
const Line = tw.div`flex items-center`
const IconContainer = tw.div`w-16 lg:w-36`

const IndexPage = () => (
  <Layout>
    <Seo title={"Home"} />
    <CounterContainer>
      <Line>
        <IconContainer>
          <img src={Holidays} alt={'holidays'}/>
        </IconContainer>
        <Counter refDate={new Date(2022, 11, 30, 17, 0, 0, 0)} />
      </Line>
    </CounterContainer>
  </Layout>
)

export default IndexPage

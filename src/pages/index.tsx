import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Counter from "../counter/counter"
import tw from "twin.macro"

import Home from "../assets/home.inline.svg"
import Signature from "../assets/signature.inline.svg"

const CounterContainer = tw.div`flex flex-col h-full w-full items-center justify-center`
const Line = tw.div`flex items-center`

const IndexPage = () => (
  <Layout>
    <Seo title={"Home"} />
    <CounterContainer>
      <Line>
        <Signature style={{ width: "100px" }} />
        <Counter refDate={new Date(2021, 11, 13, 15, 0, 0, 0)} />
      </Line>
      <Line>
        <Home />
        <Counter refDate={new Date(2022, 3, 1, 12, 0, 0, 0)} />
      </Line>
    </CounterContainer>
  </Layout>
)

export default IndexPage

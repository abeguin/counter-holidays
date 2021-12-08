import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Counter from "../counter/counter"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Counter refDate={new Date(2021, 11, 13, 15, 0, 0, 0)} />
    <Counter refDate={new Date(2022, 3, 1, 12, 0, 0, 0)} />
  </Layout>
)

export default IndexPage

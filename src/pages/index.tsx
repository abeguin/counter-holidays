import * as React from "react"
import * as css from '@emotion/styled'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Counter from "../components/counter"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Counter />
  </Layout>
)

export default IndexPage

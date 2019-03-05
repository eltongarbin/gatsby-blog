import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OtherPage = () => (
  <Layout>
    <SEO title="Page 34" />
    <p>Welcome to page 34</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OtherPage

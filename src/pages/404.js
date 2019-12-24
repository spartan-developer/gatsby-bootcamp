import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head title="404" />
    <h1>Page not found :(</h1>
    <p>
      <Link to="/">Home</Link>
    </p>
  </Layout>
)

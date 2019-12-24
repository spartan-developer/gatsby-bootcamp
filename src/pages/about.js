import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head title="About" />
    <h2>About</h2>
    <p>I'm trying to learn gatsby</p>
    <p>
      <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

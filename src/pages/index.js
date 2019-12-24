import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head />
    <h2>Home</h2>
    <p>
      <a href="/contact">Contact me</a>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/contact">Contact me (using Link)</Link>
    </p>
  </Layout>
)

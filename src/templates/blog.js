import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
/*
export const query = graphql`
  query GetPost($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default props => {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}
*/

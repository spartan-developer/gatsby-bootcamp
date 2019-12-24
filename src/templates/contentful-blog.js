import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

export const query = graphql`
  query GetBlogPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default props => {
  const post = props.data.contentfulBlogPost

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            alt={node.data.target.fields.title["en-US"]}
            src={node.data.target.fields.file["en-US"].url}
          />
        )
      },
    },
  }

  return (
    <Layout>
      <Head title={post.title} />
      <h2>{post.title}</h2>
      <p>{post.publishedDate}</p>
      {documentToReactComponents(post.body.json, options)}
    </Layout>
  )
}

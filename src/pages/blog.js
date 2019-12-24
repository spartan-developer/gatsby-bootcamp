import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./blog.module.scss"
import Head from "../components/head"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(fromNow: true)
            slug
          }
        }
      }
    }
  `)

  const edges = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <h2>Blog</h2>
      <ol className={styles.posts}>
        {edges.map(({ node }) => (
          <li>
            <Link to={`/posts/${node.slug}`}>
              <h3>{node.title}</h3>
              <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
/*
export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h2>Blog</h2>
      <ol className={styles.posts}>
        {edges.map(({ node }) => (
          <li>
            <Link to={`/posts/${node.fields.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
*/

const slugify = require("slugify")
const path = require("path")
const { graphql } = require("gatsby")

/*
exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    //const slug = slugify(node.frontmatter.title)
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({ node, name: "slug", value: slug })
  }
}
*/

exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const edges = response.data.allContentfulBlogPost.edges

  edges.forEach(edge => {
    //const { node } = edge
    actions.createPage({
      path: `/posts/${edge.node.slug}`,
      component: path.resolve("./src/templates/contentful-blog.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
/*
exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = response.data.allMarkdownRemark.edges

  edges.forEach(edge => {
    //const { node } = edge
    actions.createPage({
      path: `/posts/${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
*/

import React from "react"
import styles from "./footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <p>Created by {site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

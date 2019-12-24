import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./header.module.scss"

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1>{site.siteMetadata.title}</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" activeClassName={styles.active}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName={styles.active}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={styles.active}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={styles.active}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

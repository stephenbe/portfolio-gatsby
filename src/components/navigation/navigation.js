import React from "react"
import NavigationStyles from "./Navigation.module.css"

export default () => (
  <nav className={NavigationStyles.nav}>
    <ul className={NavigationStyles.ul}>
      <li>
        <a href="" className={NavigationStyles.link}>
          Blog
        </a>
      </li>
      <li>
        <a className={NavigationStyles.link} href="https://www.google.com/">
          Resume
        </a>
      </li>
      <li>
        <button className={NavigationStyles.link}>Contact</button>
      </li>
    </ul>
  </nav>
)

import React from "react"
import NavigationStyles from "./Navigation.module.css"

export default () => (
  <div>
    <nav className={NavigationStyles.nav}>
      <ul className={NavigationStyles.ul}>
        <li className={NavigationStyles.li}>
          <button className={NavigationStyles.link}>Articles</button>
        </li>
        <li className={NavigationStyles.li}>
          <a className={NavigationStyles.link} href="https://www.google.com/">
            Resume
          </a>
        </li>
        <li className={NavigationStyles.li}>
          <button className={NavigationStyles.link}>Contact</button>
        </li>
      </ul>
    </nav>
  </div>
)

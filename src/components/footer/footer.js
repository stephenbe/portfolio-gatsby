import React from "react"
import Section from "../section/section"
import FooterStyles from "./footer.module.css"

export default () => (
  <Section sectionText="Contact">
    <footer>
      <a className={FooterStyles.link} href="mailto:stephenbe@live.ca">
        stephenbe@live.ca
      </a>
      <a
        className={FooterStyles.link}
        href="https://www.linkedin.com/in/stephenbe/"
      >
        Linkedin
      </a>
      <a className={FooterStyles.link} href="https://twitter.com/stephenbefd">
        Twitter
      </a>
    </footer>
  </Section>
)

import React from "react"
import Section from "../section/section"
import FooterStyles from "./footer.module.css"

export default () => (
  <Section sectionText="Contact" isEnd="true">
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.inner}>
        <a className={FooterStyles.link} href="mailto:stephenbe@live.ca">
          stephenbe@live.ca
        </a>
        <a
          className={FooterStyles.link}
          href="https://www.linkedin.com/in/stephenbe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className={FooterStyles.link}
          href="https://twitter.com/stephenbefd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  </Section>
)

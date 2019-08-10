import React from "react"
import sectionStyles from "./section.module.css"
import Title from "../title/title"

export default ({ children, ...props }) => (
  <div className={sectionStyles.container}>
    <Title titleText={props.sectionText}></Title>
    {children}
  </div>
)

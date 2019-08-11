import React from "react"
import titleStyles from "./title.module.css"

export default props => (
  <div className={titleStyles.div}>
    <h2 className={titleStyles.title}> {props.titleText}</h2>
    <hr className={titleStyles.hr} />
  </div>
)

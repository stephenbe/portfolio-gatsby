import React from "react"
import skillCategoryStyles from "./skillCategory.module.css"

export default ({ children, ...props }) => (
  <div className={skillCategoryStyles.div}>
    <h3 className={skillCategoryStyles.title}>{props.title}</h3>
    {children}
  </div>
)

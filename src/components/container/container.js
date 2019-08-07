import React from "react"
import containerStyles from "./container.module.css"
import Navigation from "../navigation/navigation"

export default ({ children }) => (
  <div className={containerStyles.container}>
    <Navigation></Navigation>
    {children}
  </div>
)

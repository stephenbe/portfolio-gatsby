import React from "react"
import Header from "../components/header"
export default () => (
  <div
    style={{
      color: `teal`,
    }}
  >
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" headerSubtext="test" />
    <p>Such wow. Very React.</p>
  </div>
)

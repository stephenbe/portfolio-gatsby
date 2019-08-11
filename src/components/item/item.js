import React from "react"

import Itemstyles from "./Item.module.css"

export default props => (
  <li
    className={Itemstyles.li}
    style={{
      color: props.skillColor,
    }}
  >
    <span className={Itemstyles.span}>{props.skillText}</span>
  </li>
)

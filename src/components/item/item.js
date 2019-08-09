import React from "react"

import Itemstyles from "./Item.module.css"

export default props => <li class={Itemstyles.li}>{props.skillText}</li>

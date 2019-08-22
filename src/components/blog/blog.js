import React from "react"
import { Link } from "gatsby"

import BlogStyles from "./blog.module.css"

export default props => (
  <div>
    <article>
      <header>
        <h3>
          <Link className={BlogStyles.title} to={props.blogPath}>
            {props.blogTitle}
          </Link>
        </h3>

        <time datetime="2019-08-02">{props.blogDate}</time>
      </header>
      <p>{props.blogExcerpt}</p>

      <Link to={props.blogPath}>Read article</Link>
    </article>
  </div>
)

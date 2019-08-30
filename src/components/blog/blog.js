import React from "react"
import { Link } from "gatsby"

import BlogStyles from "./blog.module.css"

export default props => (
  <article className={BlogStyles.article}>
    <header>
      <h3 className={BlogStyles.title}>
        <Link className={BlogStyles.titlelink} to={props.blogPath}>
          {props.blogTitle}
        </Link>
      </h3>

      <time className={BlogStyles.date} datetime="2019-08-02">
        {props.blogDate}
      </time>
    </header>
    <p className={BlogStyles.description}>{props.blogExcerpt}</p>

    <Link className={BlogStyles.link} to={props.blogPath}>
      Read article
    </Link>
  </article>
)

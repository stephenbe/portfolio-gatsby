import React from "react"
import Section from "../section/section"

export default () => (
  <div>
    <Section sectionText="Blog">
      <article>
        <header>
          <h3>The creation of this website with Gasby (ReactJS)</h3>

          <time datetime="2019-08-02">2019-08-02 </time>
        </header>
        <p>
          FlyGuys is a website that displays prices and details of flights. It
          consists of an admin dashboard to provide staff with CRUD operations
          (create, read, update a.
        </p>

        <a href="https://www.google.com/">Read article</a>
      </article>
    </Section>
  </div>
)

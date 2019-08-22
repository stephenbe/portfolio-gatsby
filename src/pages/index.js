import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container/container"
import Hero from "../components/hero/hero"
import Skills from "../components/skills/skills"
import Blog from "../components/blog/blog"
import Section from "../components/section/section"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Container>
      <Hero></Hero>
      <Skills></Skills>
      <Section sectionText="Blog">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Blog
                blogTitle={post.frontmatter.title}
                blogPath={post.frontmatter.path}
                blogDate={post.frontmatter.date}
                blogExcerpt={post.excerpt}
              ></Blog>
            )
          })}
      </Section>
    </Container>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

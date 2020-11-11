import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'

const GoToTop = styled.div`
margin: 1rem 0;
`

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <SEO title={frontmatter.title} image={frontmatter.image}/>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      { frontmatter.tags?.map((tagName) => { return (
        <span>
            <Link to={`/tags/${tagName}`}>#{tagName}&nbsp;&nbsp;</Link>
        </span>
      )})}
      <GoToTop>
        <Link to={"/"}>Go to top page</Link>
      </GoToTop>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        image
        tags
      }
    }
  }
`
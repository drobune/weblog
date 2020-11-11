import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"


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
        <Link to={"/"}>Top Page</Link>
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
      }
    }
  }
`
import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'
import PropTypes from "prop-types"
import Layout from "../components/layout"

const GoToTop = styled.div`
margin: 1rem 0;
`
interface Props {
  readonly data: blogData
  readonly pageContext: any
}

const Template = ({ data }: Props) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <SEO title={frontmatter.title} image={frontmatter.image}/>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        { frontmatter.tags?.map((tagName: string) => { return (
          <span key={`${tagName}-tag`}>
            <Link to={`/tags/${tagName}`}>#{tagName}&nbsp;&nbsp;</Link>
        </span>
        )})}
        <GoToTop>
          <Link to={"/"}>Go to top page</Link>
        </GoToTop>
      </div>
    </Layout>
  )
}

export default Template

Template.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        image: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string)
      }),
    }).isRequired
  })
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

interface blogData {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      date: string
      slug: string
      image: string
      tags: string[]
    }
  }
}
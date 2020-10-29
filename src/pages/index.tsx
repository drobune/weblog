import React from "react"
import Layout from "../components/layout"
import PostLink, {PostData} from "../components/postlink"
import { graphql } from "gatsby"


const IndexPage = ({
                     data: {
                       allMarkdownRemark: { edges  },
                     },
                   }: {
  data:
    {
      allMarkdownRemark:
        { edges: PostsData }
    }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
  return(
  <Layout>
    <h1>DROBUNE Weblogs</h1>
    <div>{Posts}</div>
  </Layout>)
}

export default IndexPage

type PostsData = Array<{node: PostData }>


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }`


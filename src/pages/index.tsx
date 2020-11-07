import React from "react"
import PostLink, {PostData} from "../components/postlink"
import { graphql, Link } from "gatsby"
import TagIndex from "../components/tagIndex"

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
  <div>
    <h1>DROBUNE Weblog</h1>
    <h3>Posts</h3>
    <div>{Posts}</div>
    <h3>Tags</h3>
    <TagIndex/>
    <h3>Profile</h3>
    <Link to={"https://drobune.nl"}>link</Link>
    <div>
      <p style={{fontSize: "small", marginTop: "2rem"}}><br/>
      当ブログはamzon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイト宣伝プログラムである、 Amazonアソシエイト・プログラムの参加者です。
      </p>
    </div>
  </div>)
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
            date(formatString: "YYYY-MM-DD")
            slug
            title
          }
        }
      }
    }
  }`


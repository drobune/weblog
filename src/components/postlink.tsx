import React from "react"
import { Link } from "gatsby"

const PostLink = ( { post }: {post :PostData} ) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
export default PostLink

export interface PostData {
  id: string
  excerpt: string
  frontmatter: {
    date: string
    slug: string
    title: string
  }
}


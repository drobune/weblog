import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const TagIndex = () => {
  const data: PageQueryData = useStaticQuery(graphql`  
  query getAllTags {
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
  `)

  const { group } = data.tagsGroup
  return (
    <div>
      <ul>
        {group.map((node ) => {
          const tagName = node.fieldValue
          return (
            <div key={tagName}>
              <Link to={`/tags/${tagName}`}>#{tagName}</Link>
            </div>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/">Home</Link>
    </div>
  )
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  tagsGroup: {
    group: [
      { fieldValue: any }
    ]
  }
}

export default TagIndex

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
            <span key={tagName}>
              <Link to={`/tags/${tagName}`}>#{tagName}&nbsp;</Link>
            </span>
          )
        })}
      </ul>
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

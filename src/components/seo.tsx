import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface SEOData {
  description: string
  lang: string
  meta: {name: string, content: string}[]
  title: string
  image: string
}

function SEO({ description, lang, meta, title, image }: SEOData) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            author
            image
            twitterUserName
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const seoTitle = title || site.siteMetadata?.title
  const imageUrl = image || site.siteMetadata?.image || ``

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      titleTemplate={site.siteMetadata?.titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          property: "twitter:image",
          content: imageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.twitterUserName || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
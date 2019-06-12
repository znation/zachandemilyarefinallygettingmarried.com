import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        fullImage: file(relativePath: { eq: "index.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        },
        croppedImage: file(relativePath: { eq: "index-cropped.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img className="main-image-full" fluid={data.fullImage.childImageSharp.fluid} fadeIn={false} durationFadeIn={0} critical={true} loading="eager" />
        <Img className="main-image-cropped" fluid={data.croppedImage.childImageSharp.fluid} fadeIn={false} durationFadeIn={0} critical={true} loading="eager" />
      </div>
    )}
  />
)
export default Image

import React from 'react'

import { PageLayout } from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImageRow = () => (
  <StaticQuery
    query={graphql`
      query {
        seven: file(relativePath: { eq: "Seven.jpg" }) {
          childImageSharp {
            fixed(width: 535, height: 423) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img fixed={data.seven.childImageSharp.fixed} />
    )}
  />
)

const SecondPage = () => (
  <PageLayout>
    <h1>RSVP</h1>
    <p>We'll be sending out paper invitations in early June and will have a special link to RSVP online. Until then, here's a cute photo of our cat, Seven!</p>
    <p>
      <ImageRow />
    </p>
  </PageLayout>
)

export default SecondPage

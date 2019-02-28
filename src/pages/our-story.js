import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Heading = (props) => (
  <h2 className="cursive" style={{
    color: "#b59148",
    fontSize: '26px',
    textAlign: 'center'
  }}>
    {props.children}
  </h2>
)

const SecondPage = () => (
  <StaticQuery
    query={graphql`
      query {
        emily: file(relativePath: { eq: "Emily.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        riker: file(relativePath: { eq: "rikergroom.png" }) {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        },
        ezri: file(relativePath: { eq: "ezribride.png" }) {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        },
        heart: file(relativePath: { eq: "heart.png" }) {
          childImageSharp {
            fixed(width: 120, height: 111) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Row>
          <Col xs={4}>
            <Img fluid={data.ezri.childImageSharp.fluid} />
          </Col>
          <Col xs={4}>
            <div style={{
              height: 240,
              textAlign: 'center',
              lineHeight: '240px'
            }}>
              <Img fixed={data.heart.childImageSharp.fixed} />
            </div>
          </Col>
          <Col xs={4}>
            <Img fluid={data.riker.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Heading>How we first met:</Heading>
            <p><strong>Emily:</strong> I saw Zach pop up as one of my highest matches on a dating website. It turns out my roommate Ashley went to high school with him and also thought we'd be a good match, so I messaged him (after scouring his livejournal and web history, of course).</p>
            <p><strong>Zach:</strong> On OkCupid. Emily had artistic and non-traditional profile pictures. I had long hair.</p>
            <div style={{width: '100%', textAlign: 'center', marginBottom: 16}}>
              <Img fixed={data.emily.childImageSharp.fixed} />
            </div>
          </Col>
          <Col xs={12}>
            <Heading>Our first date:</Heading>
            <p><strong>Emily:</strong> I went over to Zach's house and we played hours of Starcraft, a real-time strategy computer game. Things were a little tense after Zach won the first game. But once I realized he only had one strategy that I could beat by rushing him with Terran marines and firebats, things greatly improved.</p>
            <p><strong>Zach:</strong> Carrier rush (Starcraft).</p>
          </Col>
          <Col xs={12}>
            <Heading>How we ended up in Seattle:</Heading>
            <p><strong>Emily:</strong> Zach interned at Microsoft over two summers and then moved up here after college to work at Microsoft full-time. I stayed in Tucson for a year to continue teaching, applied to law school in Seattle, and then joined him the following year.</p>
            <p><strong>Zach:</strong> I moved here in June 2008 to work for Microsoft full time after graduating college. Emily was still teaching music in Tucson, but applied to Seattle U Law and got in, starting the year after that. We've loved living here ever since!</p>
          </Col>
          <Col xs={12}>
            <Heading>Our favorite thing about the other:</Heading>
            <p><strong>Emily:</strong> I have a lot of crazy ideas and projects that I take on, and Zach is always incredibly supportive of each and every one. When I doubt myself, he gives me encouragement and makes me believe that I can do it.</p>
            <p><strong>Zach:</strong> There are so many things I love about Emily, I can't pick just one. For instance, the way she is able to logically analyze every situation, and plan ahead in a way that most people can't or wouldn't.</p>
          </Col>
          <Col xs={12}>
            <Heading>Our most memorable date:</Heading>
            <p><strong>Emily:</strong> Shortly before we got engaged, we went to an Italian restaurant run by a butcher who cut up our dinner while Bad to the Bone played.  We then went to the rooftop and enjoyed five courses of beef while sharing stories with an Italian pair on our left and a Russian couple on our right.</p>
            <p><strong>Zach:</strong> Not a single date, but a theme: a celebratory meal at Delancey.</p>
          </Col>
          <Col xs={12}>
            <Heading>Something we have in common:</Heading>
            <p><strong>Emily:</strong> We're very obsessed with our pets. You probably already knew that, though.</p>
            <p><strong>Zach:</strong> Taste in movies (mostly) and video games.</p>
          </Col>
          <Col xs={12}>
            <Heading>Something we don’t have in common:</Heading>
            <p><strong>Emily:</strong> I am type-A and hate being late (or even on time). Zach is a little more free-spirited when it comes to the convention of time.</p>
            <p><strong>Zach:</strong> Listening to Disney soundtracks on repeat.</p>
          </Col>
        </Row>
      </Layout>
    )}
  />
)

export default SecondPage

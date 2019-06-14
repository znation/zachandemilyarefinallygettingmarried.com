import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col, Navbar, Nav } from 'react-bootstrap';

const NavItem = ({ href, children, className }) => (
  <li role="presentation">
    <Link to={href} className={className}>
      {children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <Grid>
    <Row>
      <Col xs={12}
           style={{
             textAlign: 'center',
             marginTop: '24px',
             marginBottom: '12px'
           }}>
        <h1 className="header">
          <Link
            to="/"
          >
            <div className="cursive">
              <div style={{
                color: "#76b3b8",
                fontSize: '64px'
              }}>{siteTitle}</div>
              <div style={{
                color: "#b59148",
                fontSize: '26px'
              }}>are finally getting married!</div>
            </div>
          </Link>
        </h1>
      </Col>
      <Col xs={12}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <div style={{
              width: '100%',
              background: '#d0d0d0',
              height: '1px',
              marginRight: '16px'
            }} />
            <Nav>
              <NavItem href="/">Home</NavItem>
              <NavItem href="/our-story">Our Story</NavItem>
              <NavItem href="/the-party">The Party</NavItem>
              <NavItem href="/travel">Travel</NavItem>
              <li role="presentation">
                <a href="https://zachandemilywedding.rsvpify.com" className="glow">
                  RSVP
                </a>
              </li>
              <NavItem href="/registry">Registry</NavItem>
            </Nav>
            <div style={{
              width: '100%',
              background: '#d0d0d0',
              height: '1px',
              marginLeft: '16px'
            }} />
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Grid>
)

export default Header

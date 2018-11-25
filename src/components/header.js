import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap';

const HeaderLink = ({ to, children }) => (
  <Link to={to}>
    <div className="headerlink">
      {children}
    </div>
  </Link>
)

const Header = ({ siteTitle }) => (
  <Grid>
    <Row>
      <Col xs={12}
           style={{
             textAlign: 'center',
             marginBottom: '16px'
           }}>
        <h1>
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
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            background: '#d0d0d0',
            height: '1px',
            marginRight: '16px'
          }} />
          <div style={{
            whiteSpace: 'nowrap'
          }}>
            <HeaderLink to='/'>Home</HeaderLink>
            <HeaderLink to='/our-story'>Our Story</HeaderLink>
            <HeaderLink to='/the-party'>The Party</HeaderLink>
            <HeaderLink to='/travel'>Travel</HeaderLink>
            <HeaderLink to='/rsvp'>RSVP</HeaderLink>
            <HeaderLink to='/registry'>Registry</HeaderLink>
          </div>
          <div style={{
            width: '100%',
            background: '#d0d0d0',
            height: '1px',
            marginLeft: '16px'
          }} />
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Header

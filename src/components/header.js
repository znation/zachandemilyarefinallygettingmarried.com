import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Grid>
    <Row>
      <Col xs={12}
           style={{
             textAlign: 'center'
           }}>
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </Col>
    </Row>
  </Grid>
)

export default Header

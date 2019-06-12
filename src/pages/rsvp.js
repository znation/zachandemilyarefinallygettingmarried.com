import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Row>
      <Col xs={12} sm={10} smOffset={1} style={{textAlign: 'center'}}>
        <iframe title="RSVPIfy" id="RSVPifyIFrame" width="80%" height="600" src="https://zachandemilywedding.app.rsvpify.com/?embed=1&js=1" frameborder="0" scrolling="yes"/>
      </Col>
    </Row>
  </Layout>
)

export default SecondPage

import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Row>
      <Col xs={8} xsOffset={2}>
        <div style={{
          border: '1px solid #cfcfd0'
        }}>
          <Image />
        </div>
      </Col>
      <Col xs={12}>
        Footer-like thing goes here
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

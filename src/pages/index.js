import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Row>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2}>
        <div className="main-image-container">
          <div style={{
            border: '1px solid #cfcfd0',
            marginBottom: '30px'
          }}>
            <Image />
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '4px'
        }}>
          <div style={{
            width: '100%',
            background: '#d0d0d0',
            height: '1px',
            marginRight: '16px'
          }} />
          <div className="cursive" style={{
            whiteSpace: 'nowrap',
            fontSize: '36px',
            color: '#76b3b8',
            paddingLeft: '20px',
            paddingRight: '20px'
          }}>
            Come celebrate with us!
          </div>
          <div style={{
            width: '100%',
            background: '#d0d0d0',
            height: '1px',
            marginRight: '16px'
          }} />
        </div>
      </Col>
      <Col xs={12}>
          <div style={{
            textTransform: 'uppercase',
            fontSize: '16px'
          }}>
            <div style={{
              width: '100%',
              textAlign: 'center'
            }}>
              Seattle, Washington
            </div>
            <div style={{
              width: '100%',
              textAlign: 'center'
            }}>
              Sunday, August 25, 2019
            </div>
          </div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

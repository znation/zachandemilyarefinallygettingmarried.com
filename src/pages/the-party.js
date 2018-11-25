import React from 'react'
import { Link } from 'gatsby'

import { PageLayout } from '../components/layout'

const SecondPage = () => (
  <PageLayout>
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      style={{border:0}}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc8v5UsYVkFQRmARnp0afFmI&key=AIzaSyC7yYPJolqdd0I01einRXIWw014fu_sevQ"
      allowFullScreen />
  </PageLayout>
)

export default SecondPage

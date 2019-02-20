import React from 'react'

import { PageLayout } from '../components/layout'

const SecondPage = () => (
  <PageLayout>
    <p>
      We will be getting married in a private ceremony at the courthouse with our parents and siblings
      in attendance. Afterwards, we’d love for you to join us to celebrate at the&nbsp;
      <a href="https://www.stoneburnerseattle.com/the-olympic-rooftop-pavilion">
        Olympic Rooftop Pavilion
      </a> in Seattle, Washington at 5pm on Sunday, August 25, 2019.
    </p>
    <p>
      Please join us for cocktail hour on the roof, followed by a family style dinner prepared by local
      restaurant Stoneburner, and then pie and cake. And games. Lots of games.
    </p>
    <iframe
      title="Map to Venue"
      width="100%"
      height="400"
      frameBorder="0"
      style={{border:0}}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc8v5UsYVkFQRmARnp0afFmI&key=AIzaSyC7yYPJolqdd0I01einRXIWw014fu_sevQ"
      allowFullScreen />
    <p>
      Street parking can be challenging. However, the hotel has underground parking, and parking is
      also available at several nearby pay lots:
    </p>
    <ul>
      <li>
        Republic Parking Lot: 5433 Leary Ave NW, Seattle, WA 98107
      </li>
      <li>
        Diamond Parking Lot: 5447 Leary Ave NW, Seattle, WA 98107
      </li>
      <li>
        Unidentified Parking Lot: 5444 Ballard Ave NW, Seattle, WA 98107
      </li>
    </ul>
  </PageLayout>
)

export default SecondPage

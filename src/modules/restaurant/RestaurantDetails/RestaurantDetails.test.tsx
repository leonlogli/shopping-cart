import React from 'react'

import { mountWithTheme } from '../../../utils'

import RestaurantDetails from './RestaurantDetails'

describe('<RestaurantDetails />', () => {
  const wrapper = mountWithTheme(
    <RestaurantDetails
      text={`Art’chill est un endroit incontournable de rencontres des étudiants de l’UIR. \nSitué entre le Bâtiment 3 et les terrains de sport, il vous propose outre ses offres à la carte, des formules petit-déjeuner, déjeuner et des petites collations dans une atmosphère décontractée.`}
      category="Repas variés"
      open
      statusText="Ferme à 22h"
      schedules={[
        { day: 'MONDAY', start: '07:30', end: '23:00' },
        { day: 'TUESDAY', start: '07:30', end: '23:00' },
        { day: 'WEDNESDAY', start: '07:30', end: '23:00' },
        { day: 'THURSDAY', start: '07:30', end: '23:00' },
        { day: 'FRIDAY', start: '07:30', end: '23:00' },
      ]}
    />
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

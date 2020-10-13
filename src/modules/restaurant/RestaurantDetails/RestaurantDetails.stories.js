import React from 'react'

import RestaurantDetails from '.'
import { Wrapper } from '../../../../.storybook'

export default {
  title: 'RestaurantDetails',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => (
  <RestaurantDetails
    text={`Art’chill est un endroit incontournable de rencontres des étudiants de l’UIR. \nSitué entre le Bâtiment 3 et les terrains de sport, il vous propose outre ses offres à la carte, des formules petit-déjeuner, déjeuner et des petites collations dans une atmosphère décontractée.`}
    category="Repas variés"
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

export const closed = () => (
  <RestaurantDetails
    text={`Art’chill est un endroit incontournable de rencontres des étudiants de l’UIR. \nSitué entre le Bâtiment 3 et les terrains de sport, il vous propose outre ses offres à la carte, des formules petit-déjeuner, déjeuner et des petites collations dans une atmosphère décontractée.`}
    category="Repas variés"
    open={false}
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

import React from 'react'

import { Wrapper } from '../../../../.storybook'
import { restaurants } from '../../../pages/api/restaurants'

import RestaurantPageContainer from '.'

export default {
  title: 'RestaurantPageContainer',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => (
  <RestaurantPageContainer restaurant={restaurants[0]} />
)

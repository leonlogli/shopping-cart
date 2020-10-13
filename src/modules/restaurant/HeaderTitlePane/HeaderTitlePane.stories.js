import React from 'react'

import { Wrapper } from '../../../../.storybook'

import { restaurants } from '../../../pages/api/restaurants'

import HeaderTitlePane from '.'

export default {
  title: 'HeaderTitlePane',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => <HeaderTitlePane restaurant={restaurants[1]} />

import React from 'react'

import { Wrapper } from '../../../../.storybook'

import RestoPage from '.'

export default {
  title: 'RestoPage',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => <RestoPage restoId="restaurant-principal" />

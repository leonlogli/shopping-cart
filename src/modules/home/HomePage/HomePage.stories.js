import React from 'react'

import { Wrapper } from '../../../../.storybook'

import HomePage from '.'

export default {
  title: 'HomePage',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => <HomePage />

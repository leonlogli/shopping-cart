import React from 'react'

import { Wrapper } from '../../../../.storybook'

import NavBar from '.'

export default {
  title: 'NavBar',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => <NavBar />

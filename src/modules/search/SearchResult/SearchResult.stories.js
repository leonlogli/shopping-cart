import React from 'react'

import { Wrapper } from '../../../../.storybook'

import SearchResult from '.'

export default {
  title: 'SearchResult',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => <SearchResult searchQuery="PIZZA" />

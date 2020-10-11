import React from 'react'

import { Wrapper } from '../../../../.storybook'

import PageLayout from '.'
import { Box } from '../../../components'

export default {
  title: 'PageLayout',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => (
  <PageLayout>
    <Box paddingTop="24px" paddingLeft="16px">
      content
    </Box>
  </PageLayout>
)

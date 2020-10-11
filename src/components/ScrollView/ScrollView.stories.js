import React from 'react'

import ScrollView from '.'
import { Box } from '../Layout'

export default {
  title: 'ScrollView',
}

const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'tomato']
const array = Array(20)
  .fill()
  .map(() => Math.round(Math.random() * 20))

export const scrollView = () => (
  <ScrollView>
    {array.map((val, i) => (
      <Box
        p={10}
        key={i}
        color="white"
        bgcolor={colors[Math.floor(Math.random() * colors.length)]}
      >
        {`Item ${i}`}
      </Box>
    ))}
  </ScrollView>
)

export const withoutSpacing = () => (
  <ScrollView spacing="0">
    {array.map((val, i) => (
      <Box
        p={10}
        key={i}
        color="white"
        bgcolor={colors[Math.floor(Math.random() * colors.length)]}
      >
        {`Item ${i}`}
      </Box>
    ))}
  </ScrollView>
)

export const withScrollDuration = () => (
  <ScrollView scrollDuration={400}>
    {array.map((val, i) => (
      <Box
        p={10}
        key={i}
        color="white"
        bgcolor={colors[Math.floor(Math.random() * colors.length)]}
      >
        {`Item ${i}`}
      </Box>
    ))}
  </ScrollView>
)

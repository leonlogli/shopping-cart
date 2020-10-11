import React from 'react'

import { Box, BoxProps } from '../Layout'

import { ContainerBox, InnerBox } from './RatioBox.style'

export type RatioBoxProps = BoxProps & {
  /**
   * Ratio value in percent
   */
  ratio: number
}

const RatioBox = (props: RatioBoxProps) => {
  const { ratio, children, ...other } = props

  return (
    <Box {...other}>
      <ContainerBox {...{ ratio }}>
        <InnerBox>{children}</InnerBox>
      </ContainerBox>
    </Box>
  )
}

export { RatioBox }
export default RatioBox

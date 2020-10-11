import React, { forwardRef } from 'react'
import Slide, { SlideProps } from '@material-ui/core/Slide'
import Zoom, { ZoomProps } from '@material-ui/core/Zoom'

export type SlideTransitionProps = SlideProps & {
  children?: React.ReactElement
}

export type ZoomTransitionProps = ZoomProps & { children?: React.ReactElement }

const SlideTransition = forwardRef<unknown, SlideTransitionProps>(
  (props, ref) => <Slide direction="up" ref={ref} {...props} />
)

const ZoomTransition = forwardRef<unknown, ZoomTransitionProps>(
  (props, ref) => <Zoom ref={ref} {...props} />
)

export { SlideTransition, ZoomTransition }

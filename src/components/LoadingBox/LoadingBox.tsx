import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { BoxProps } from '../Layout'

import { LoadingBoxRoot } from './LoadingBox.style'

export type LoadingBoxProps = BoxProps & {
  timeout?: number
}

const LoadingBox = ({ timeout = 0, ...other }: LoadingBoxProps) => {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(true), timeout)

    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <LoadingBoxRoot bgcolor="inherit" height="100%" {...other}>
      {showLoading && <CircularProgress />}
    </LoadingBoxRoot>
  )
}

export { LoadingBox }
export default LoadingBox

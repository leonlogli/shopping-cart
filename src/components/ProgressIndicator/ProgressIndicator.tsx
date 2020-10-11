import React from 'react'
import { CircularProgressProps } from '@material-ui/core/CircularProgress'
import { LinearProgressProps } from '@material-ui/core/LinearProgress'

import { CircularProgress, LinearProgress } from './ProgressIndicator.style'

export type ProgressIndicatorProps = CircularProgressProps &
  LinearProgressProps & {
    /**
     * Whether the indicator should be circular
     * @default false
     */
    circular?: boolean
    /**
     * The progress indicator position
     * @default 'top' for linear and 'center' for circular indicator
     */
    position?: 'top' | 'center'
  }

/**
 * Indicates the progress of an operation
 */
const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { circular, position = circular ? 'center' : 'top', ...other } = props

  if (circular) {
    return <CircularProgress position={position} {...other} />
  }

  return <LinearProgress position={position} {...other} />
}

export { ProgressIndicator }
export default ProgressIndicator

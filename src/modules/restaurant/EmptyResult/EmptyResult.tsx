import React from 'react'
import Button from '@material-ui/core/Button'

import { BoxProps, Text } from '../../../components'

import { EmptyResultRoot } from './EmptyResult.style'

export type EmptyResultProps = BoxProps & {
  onReset?: () => void
}

const EmptyResult = ({ onReset, ...other }: EmptyResultProps) => {
  return (
    <EmptyResultRoot {...other} fullWidth>
      <Text color="textSecondary">Aucun resultat trouvé.</Text>
      {onReset && (
        <Button color="primary" variant="contained" onClick={onReset}>
          Explorer les menus
        </Button>
      )}
    </EmptyResultRoot>
  )
}

export { EmptyResult }
export default EmptyResult

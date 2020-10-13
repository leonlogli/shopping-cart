import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'

import ItemRadioGroup, { ItemRadioGroupProps } from './RadioGroup'
import CheckGroup, { CheckGroupProps } from './CheckGroup'

export type ItemGroupControlProps = ItemRadioGroupProps &
  CheckGroupProps & {
    error?: boolean
    helperText?: string
  }

const ItemGroupControl = (props: ItemGroupControlProps) => {
  const { data: option, error, helperText, ...other } = props

  const control = option.max === 1 ? 'radio' : 'checkbox'
  const isRadio = control === 'radio'
  const required = (option.min || 0) >= 1

  return (
    <FormControl component="fieldset" error={error} required={required}>
      <FormLabel component="legend">{option.name}</FormLabel>
      {isRadio ? (
        <ItemRadioGroup data={option} {...other} />
      ) : (
        <CheckGroup data={option} {...other} />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export { ItemGroupControl }
export default ItemGroupControl

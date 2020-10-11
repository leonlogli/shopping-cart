import React, { forwardRef } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

type Option = {
  value: string
  label: string
}

export type SelectProps = TextFieldProps & {
  options: (Option | string)[]
}

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const { options, SelectProps: SelectPartialProps, ...other } = props
  const native = /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(
    navigator.userAgent
  )

  return (
    <TextField
      ref={ref}
      {...other}
      select
      SelectProps={{ ...SelectPartialProps, native }}
    >
      {options.map((option: any) =>
        native ? (
          <option value={option.value || option} key={option.value || option}>
            {option.label || option}
          </option>
        ) : (
          <MenuItem value={option.value || option} key={option.value || option}>
            {option.label || option}
          </MenuItem>
        )
      )}
    </TextField>
  )
})

export { Select }
export default Select

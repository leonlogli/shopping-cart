import React, { useState, ChangeEvent } from 'react'
import FormGroup, { FormGroupProps } from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import { Text } from '../../../components'

import { LabelBox, OptionLabel } from './MenuItemOptionsForm.style'

import { toUSD } from '../../../utils'
import { OptionItem, MenuOptionGroup } from '../state'

export type CheckGroupProps = Omit<FormGroupProps, 'value' | 'onChange'> & {
  data: MenuOptionGroup
  value?: OptionItem[]
  onChange?: (values: OptionItem[]) => void
}

const CheckGroup = (props: CheckGroupProps) => {
  const { data, value: valueProp = [], onChange, ...other } = props
  const [value, setValue] = useState(valueProp)

  const disable = (item: OptionItem) => {
    return data.max === value.length && !value.find((v) => v.id === item.id)
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let values: OptionItem[] = []
    const targetValue = Number(target.value)

    if (value.find((i) => i.id === targetValue) && !target.checked) {
      values = value.filter((el) => el.id !== targetValue)
    } else {
      const val = data.items.find((d) => d.id === targetValue) as OptionItem

      values = [...value, val]
    }

    setValue(values)
    if (onChange) onChange(values)
  }

  return (
    <FormGroup {...other}>
      {data.items.map((item) => (
        <OptionLabel
          value={item.id}
          key={item.name}
          disabled={disable(item)}
          control={
            <Checkbox
              checked={!!value.find((v) => v.id === item.id)}
              onChange={handleChange}
              value={item.id}
              color="primary"
            />
          }
          label={
            <LabelBox>
              <Text>{item.name}</Text>
              {item.price && <Text>{toUSD(item.price)}</Text>}
            </LabelBox>
          }
        />
      ))}
    </FormGroup>
  )
}

export { CheckGroup }
export default CheckGroup

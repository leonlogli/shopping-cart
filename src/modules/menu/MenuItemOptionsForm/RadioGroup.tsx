import React, { useState, ChangeEvent } from 'react'
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

import { Text } from '../../../components'

import { LabelBox, OptionLabel } from './MenuItemOptionsForm.style'

import { toUSD } from '../../../utils'
import { OptionItem, MenuOptionGroup } from '../state'

export type ItemRadioGroupProps = Omit<
  RadioGroupProps,
  'value' | 'onChange'
> & {
  data: MenuOptionGroup
  value?: OptionItem[]
  onChange?: (value: OptionItem[]) => void
}

const ItemRadioGroup = (props: ItemRadioGroupProps) => {
  const { data, value: valueProp, onChange, ...other } = props

  const [value, setValue] = useState(valueProp && valueProp[0])

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const val = data.items.find((d) => Number(d.id) === Number(target.value))

    setValue(val)
    if (onChange) onChange(val ? [val] : [])
  }

  return (
    <RadioGroup
      {...other}
      value={value && String(value.id)}
      onChange={handleChange}
    >
      {data.items.map((item) => (
        <OptionLabel
          value={String(item.id)}
          key={item.id}
          control={<Radio color="primary" />}
          label={
            <LabelBox>
              <Text>{item.name}</Text>
              {item.price && <Text>{toUSD(item.price)}</Text>}
            </LabelBox>
          }
        />
      ))}
    </RadioGroup>
  )
}

export { ItemRadioGroup }
export default ItemRadioGroup

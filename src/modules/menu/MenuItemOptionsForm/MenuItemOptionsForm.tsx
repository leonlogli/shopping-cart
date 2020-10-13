import React, { Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'

import Divider from '@material-ui/core/Divider'
import ItemGroupControl from './ItemGroupControl'

import { MenuItemOptionsFormRoot } from './MenuItemOptionsForm.style'

import { menuItemOptionsFormValiation } from './MenuItemOptionsForm.validation'
import { MenuOptionGroup, OptionItem } from '../state'

export type MenuItemOptionsFormProps = {
  onSubmit: (optionIds: number[]) => void
  options: MenuOptionGroup[]
  id?: string
  className?: string
  selectedOptionIds?: number[]
}

export type MenuItemOptionsFormData = Record<string, Required<OptionItem[]>>

const MenuItemOptionsForm = (props: MenuItemOptionsFormProps) => {
  const { onSubmit, options, selectedOptionIds, ...other } = props

  const optionGroups = options.map((opt) => {
    const valiatonRules = opt ? menuItemOptionsFormValiation(opt) : undefined

    const defaultValue = opt.items.filter((item) => {
      return selectedOptionIds && selectedOptionIds.includes(item.id)
    })

    return {
      ...opt,
      valiatonRules,
      defaultValue: defaultValue.length > 0 ? defaultValue : undefined,
    }
  })

  const defaultValues = Object.assign(
    {},
    ...optionGroups.map((o) => ({ [o.id]: o.defaultValue }))
  )

  const { handleSubmit, errors, control } = useForm<MenuItemOptionsFormData>({
    defaultValues,
  })

  const submit = (values: MenuItemOptionsFormData) => {
    const selectedOpts: number[] = []

    Object.values(values)
      .filter((v) => v)
      .forEach((optItems) => {
        selectedOpts.push(...optItems.map((item) => item.id))
      })

    onSubmit(selectedOpts)
  }

  return (
    <MenuItemOptionsFormRoot {...other} onSubmit={handleSubmit(submit)}>
      {optionGroups.map((optGroup) => (
        <Fragment key={optGroup.id}>
          <Divider />
          <Controller
            control={control}
            name={String(optGroup.id)}
            rules={optGroup.valiatonRules}
            as={
              <ItemGroupControl
                data={optGroup}
                error={!!errors[optGroup.id]}
                helperText={(errors[optGroup.id] as any)?.message}
              />
            }
          />
        </Fragment>
      ))}
    </MenuItemOptionsFormRoot>
  )
}

export { MenuItemOptionsForm }
export default MenuItemOptionsForm

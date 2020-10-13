import React from 'react'
import Divider from '@material-ui/core/Divider'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined'

import { Text, BoxProps } from '../../../components'

import {
  LabelBox,
  Title,
  RestaurantDetailsRoot,
} from './RestaurantDetails.style'
import ScheduleAccordion, { ScheduleAccordionProps } from '../ScheduleAccordion'

export type RestaurantDetailsProps = BoxProps &
  Pick<ScheduleAccordionProps, 'statusText' | 'schedules'> & {
    text: string
    category: string
    title?: string
    open?: boolean
  }

const RestaurantDetails = (props: RestaurantDetailsProps) => {
  const {
    text,
    category,
    open = true,
    title,
    statusText,
    schedules,
    ...other
  } = props

  return (
    <RestaurantDetailsRoot {...other}>
      {title && <Title>{title}</Title>}
      <Text>{text}</Text>
      <Divider />
      <LabelBox {...{ open }} className="openingHours">
        <QueryBuilderIcon color="primary" />
        <ScheduleAccordion
          open={open}
          statusText={statusText}
          schedules={schedules}
        />
      </LabelBox>
      <LabelBox>
        <LabelOutlinedIcon color="primary" />
        <Text>{category}</Text>
      </LabelBox>
    </RestaurantDetailsRoot>
  )
}

export { RestaurantDetails }
export default RestaurantDetails

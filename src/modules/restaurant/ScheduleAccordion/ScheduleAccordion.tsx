import React from 'react'
import { AccordionProps } from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Schedule } from '../state'

import {
  ScheduleAccordionRoot,
  ContentTable,
  TitleBox,
} from './ScheduleAccordion.style'
import { Day, daysFromToday, getDayName } from '../state/restaurantHelpers'
import { Text } from '../../../components'

export type ScheduleAccordionProps = Omit<AccordionProps, 'children'> & {
  open?: boolean
  statusText?: string
  schedules: Schedule[]
}

const ScheduleAccordion = (props: ScheduleAccordionProps) => {
  const {
    schedules,
    id = 'ScheduleAccordion',
    open,
    statusText,
    ...other
  } = props
  const schedulesMap = {} as Record<Day, Schedule>

  schedules.forEach((s) => {
    schedulesMap[s.day] = s
  })

  const data = daysFromToday
    .map((d) => schedulesMap[d])
    .filter(Boolean)
    .map((s) => ({
      ...s,
      dayName: getDayName(s.day),
      hours: `${s.start}–${s.end}`,
    }))

  const isOpenToday = daysFromToday[0] === data[0].day

  return (
    <ScheduleAccordionRoot {...other} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <TitleBox {...{ open }}>
          <Text>{open ? 'Open' : 'Closed'}</Text>
          {statusText && <Text>{`\u00A0⋅\u00A0${statusText}`}</Text>}
        </TitleBox>
      </AccordionSummary>
      <AccordionDetails>
        <ContentTable {...{ isOpenToday }}>
          <tbody>
            {data.map(({ day, hours, dayName }) => (
              <tr key={day}>
                <th>
                  <Text>{dayName}</Text>
                </th>
                <td>
                  <Text>{hours}</Text>
                </td>
              </tr>
            ))}
          </tbody>
        </ContentTable>
      </AccordionDetails>
    </ScheduleAccordionRoot>
  )
}

export { ScheduleAccordion }
export default ScheduleAccordion

import React from 'react'

import { Wrapper } from '../../../../.storybook'
import ScheduleAccordion from '.'

export default {
  title: 'ScheduleAccordion',
  decorators: [(storyFn) => <Wrapper vCenter={false}>{storyFn()}</Wrapper>],
}

export const Default = () => (
  <ScheduleAccordion
    statusText="Ouvre à 07h:30"
    schedules={[
      { day: 'MONDAY', start: '07:30', end: '23:00' },
      { day: 'TUESDAY', start: '07:30', end: '23:00' },
      { day: 'WEDNESDAY', start: '07:30', end: '23:00' },
      { day: 'THURSDAY', start: '07:30', end: '23:00' },
      { day: 'FRIDAY', start: '07:30', end: '23:00' },
    ]}
  />
)

export const open = () => (
  <ScheduleAccordion
    open
    statusText="Ferme à 20h45"
    schedules={[
      { day: 'MONDAY', start: '07:15', end: '20:45' },
      { day: 'TUESDAY', start: '07:15', end: '20:45' },
      { day: 'WEDNESDAY', start: '07:15', end: '20:45' },
      { day: 'THURSDAY', start: '07:15', end: '20:45' },
      { day: 'FRIDAY', start: '07:15', end: '20:45' },
      { day: 'SATURDAY', start: '07:15', end: '20:45' },
    ]}
  />
)

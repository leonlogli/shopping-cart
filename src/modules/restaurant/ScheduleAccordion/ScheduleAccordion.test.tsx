import React from 'react'

import { mountWithTheme } from '../../../utils'

import ScheduleAccordion from './ScheduleAccordion'

describe('<ScheduleAccordion />', () => {
  const wrapper = mountWithTheme(
    <ScheduleAccordion
      open
      statusText="Ferme à 22h"
      schedules={[
        { day: 'MONDAY', start: '07:30', end: '23:00' },
        { day: 'TUESDAY', start: '07:30', end: '23:00' },
        { day: 'WEDNESDAY', start: '07:30', end: '23:00' },
        { day: 'THURSDAY', start: '07:30', end: '23:00' },
        { day: 'FRIDAY', start: '07:30', end: '23:00' },
      ]}
    />
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

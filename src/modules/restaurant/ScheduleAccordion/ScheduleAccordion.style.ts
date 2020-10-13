import styled, { css } from 'styled-components'
import Accordion from '@material-ui/core/Accordion'

import { Box } from '../../../components'

const TitleBox = styled(Box)`
  display: flex;
  align-items: center;

  ${({ open, theme }: any) => css`
    p:first-child {
      color: ${!open ? theme.palette.error.main : theme.palette.primary.main};
    }
  `}
`

const ContentTable = styled.table`
  text-align: left;

  th {
    padding-right: 8px;
  }

  ${({ isOpenToday }: any) =>
    isOpenToday &&
    css`
      tr:first-child p {
        font-weight: 500;
      }
    `}
`

const ScheduleAccordionRoot = styled(Accordion)`
  background: transparent;

  &:before {
    height: 0;
  }

  .MuiAccordionSummary-root.Mui-expanded {
    height: 40px;
    min-height: 40px;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }

  &.Mui-expanded {
    margin: 0;
  }

  .MuiAccordionDetails-root {
    padding-top: 0;
    margin-top: -6px;
    padding-left: 14px;
  }
`

export { TitleBox, ContentTable, ScheduleAccordionRoot }

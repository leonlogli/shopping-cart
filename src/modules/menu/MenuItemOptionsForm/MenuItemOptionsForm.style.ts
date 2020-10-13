import styled, { css } from 'styled-components'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { Box } from '../../../components'

const LabelBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const OptionLabel = styled(FormControlLabel)`
  margin-right: 16px;

  .MuiFormControlLabel-label {
    width: 100%;
  }
`

const SubmitButton = styled(Button)`
  ${({ theme }) => css`
    margin: ${theme.spacing(3, 0, 2)};
  `}
`

const MenuItemOptionsFormRoot = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    margin: 20px 0 10px 0;
  }
`

export { SubmitButton, MenuItemOptionsFormRoot, LabelBox, OptionLabel }

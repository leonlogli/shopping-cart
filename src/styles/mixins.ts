import { css } from 'styled-components'

const muiTextFieldHeight = (height: number) => {
  const offset = (56 - height) / 2

  return css`
    input {
      padding-top: calc(18.5px - ${offset}px);
      padding-bottom: calc(18.5px - ${offset}px);
    }

    label {
      top: -${offset}px;
    }

    label[data-shrink='true'] {
      top: 0;
    }
  `
}

export { muiTextFieldHeight }

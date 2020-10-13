import styled, { css } from 'styled-components'
import { ResponsiveDialog, Box } from '../../../components'

const ContentBox = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled(Box)`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 150px;
  height: calc(100vw / 6.2 - 1px);
  width: calc(100% + 32px);
  left: -16px;

  ${({ image }: any) => css`
    background-image: url(${image});
  `}

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      width: 100%;
      left: 0;
    }
  `}
`

const CountButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 77px;

  button {
    margin: 0 8px;
  }

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  h6 {
    margin: 0 16px;
    font-size: 24px;
  }
`

const InnerBox = styled(Box)`
  margin: auto;
  padding: 16px;
  max-width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .price {
    font-size: 20px;
    margin-top: 16px;
  }
`

const MenuItemDialogRoot = styled(ResponsiveDialog)`
  .price {
    font-weight: 500;
  }

  header {
    margin-bottom: 0;

    nav {
      min-height: 64px;
    }
  }

  ${({ theme }) => css`
    ${theme.breakpoints.down('lg')} {
      .MuiDialogContent-root,
      .MuiDialogContent-root:last-child {
        padding-top: 0;
      }
    }
  `}
`

export {
  MenuItemDialogRoot,
  ContentBox,
  ImageContainer,
  CountButtonBox,
  InnerBox,
}

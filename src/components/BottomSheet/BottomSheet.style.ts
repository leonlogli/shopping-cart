import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'

const BottomSheetRoot = styled(Drawer)`
  .MuiPaper-root {
    border-top-left-radius: ${({ borderRadius }: any) => borderRadius};
    border-top-right-radius: ${({ borderRadius }: any) => borderRadius};
  }

  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.32);
  }
`

export { BottomSheetRoot }
export default BottomSheetRoot

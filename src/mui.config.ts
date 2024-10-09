import { createTheme, ThemeOptions } from '@mui/material'

const MuiThemeConfig: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#c0905d', // Màu sắc chính
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
})

export default MuiThemeConfig

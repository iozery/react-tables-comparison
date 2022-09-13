import { grey900 } from '../colors'

const globalStyles = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: grey900,
        backgroundImage: 'none',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
      },
    },
  },
}

export default globalStyles

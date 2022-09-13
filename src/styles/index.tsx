import { ReactNode } from 'react'
import {
  createTheme,
  ThemeProvider,
  Theme,
  SxProps,
} from '@mui/material/styles'
import styles from './styles'
import globalStyles from './globalStyles'

export type ThemeProviderProps = {
  children: ReactNode
}
export const theme = createTheme({
  components: Object.assign(
    globalStyles,
  ),
  palette: styles.defaultTheme.palette,
  typography: styles.defaultTheme.typography,
})

export function GlobalThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export type { Theme as MUITheme, SxProps as MUISxProps }

import 'styled-components'
import { defaultTheme } from '../styles/default/theme'

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme

  export interface DefaultTheme extends ThemeType {}
}

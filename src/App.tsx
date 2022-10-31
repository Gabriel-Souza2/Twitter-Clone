import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default/theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobalStyle />
    </ThemeProvider>
  ) 
}

export default App

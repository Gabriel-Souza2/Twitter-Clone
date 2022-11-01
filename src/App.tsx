import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { defaultTheme } from './styles/default/theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

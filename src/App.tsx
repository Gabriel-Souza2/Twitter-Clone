import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { routers } from './Router'
import { defaultTheme } from './styles/default/theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={routers} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

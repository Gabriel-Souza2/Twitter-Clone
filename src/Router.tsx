import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Tweet } from './pages/Mobile/Tweet'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/compose/tweet',
    element: <Tweet />,
  },
])

export { routers }

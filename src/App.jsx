import { RouterProvider } from 'react-router-dom'
import './App.css'
import { GlobalContext } from './context'
import { router } from './routers'

function App() {
  const user = {
    username: 'Rizky'
  }
  return (

    <GlobalContext.Provider value={user}>
      <RouterProvider router={router} />
    </GlobalContext.Provider >
  )
}

export default App

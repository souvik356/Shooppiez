import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux"
import appStore from '../Utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={appStore}>
          <Header/>
          <Outlet/>
      </Provider>
    </>
  )
}

export default App

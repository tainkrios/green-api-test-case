import { useState } from 'react'
import { BaseLayout } from './components/layout/baseLayout/BaseLayout.jsx'
import { MainScreen } from './components/mainScreen/mainScreen.jsx'
import { Login } from './components/login/login.jsx'
import './App.css'

export const App = () => {
  const [login, setLogin] = useState(true)
  return (
    <>
      <BaseLayout>
        {!login && <Login setLogin={setLogin} />}
        {login && <MainScreen />}
      </BaseLayout>
    </>
  )
}

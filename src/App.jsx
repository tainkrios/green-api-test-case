import { useState } from 'react'
// import { BaseLayout } from 'components/layout/baseLayout'
// import { MainScreen } from 'components/mainScreen'
// import { Login } from 'components/login'
import './App.css'
import { BaseLayout } from 'src/components/layout'
import { Login } from './components/login'
import { MainScreen } from './components/mainScreen'

export const App = () => {
  const [login, setLogin] = useState(false)
  return (
    <>
      <BaseLayout>
        {!login && <Login setLogin={setLogin} />}
        {login && <MainScreen />}
      </BaseLayout>
    </>
  )
}

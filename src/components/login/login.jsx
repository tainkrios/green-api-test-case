/* eslint-disable react/prop-types */
import { useRef } from 'react'
import s from './login.module.css'

export const Login = ({ setLogin }) => {
  const idInstanceRef = useRef()
  const apiTokenRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const idInstance = idInstanceRef.current?.value
    const apiToken = apiTokenRef.current?.value

    localStorage.setItem('idInstance', idInstance)
    localStorage.setItem('apiToken', apiToken)

    console.log(idInstance)

    idInstanceRef.current.value = ''
    apiTokenRef.current.value = ''
    setLogin(true)
  }

  return (
    <div className={s.wrapper}>
      <form
        className={s.loginForm}
        onSubmit={handleSubmit}
      >
        <label>IdInstance</label>
        <input
          ref={idInstanceRef}
          type='text'
          required
        />
        <label>ApiTokenInstance</label>
        <input
          ref={apiTokenRef}
          type='text'
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

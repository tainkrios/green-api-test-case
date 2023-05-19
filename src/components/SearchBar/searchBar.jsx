/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import s from './searchBar.module.css'
import { SendButton } from '../sendButton/sendButton'

export const SearchBar = ({ phoneNumber, setPhoneNumber }) => {
  const [input, setInput] = useState()
  const inputRef = useRef()

  const handleInputSubmit = () => {
    setPhoneNumber([...phoneNumber, { input, id: nanoid() }])
    // e.target.value = ''
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInputSubmit()
      inputRef.current.value = ''
    }
  }

  const handleClick = () => {
    handleInputSubmit()
    inputRef.current.value = ''
  }

  return (
    <div className={s.wrapper}>
      <input
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        type='number'
        placeholder='Введите номер телефона'
      />
      <button onClick={handleClick}>
        <SendButton />
      </button>
    </div>
  )
}

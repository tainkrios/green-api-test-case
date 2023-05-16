/* eslint-disable react/prop-types */
import { useState } from 'react'
import { nanoid} from 'nanoid'
import s from './searchBar.module.css'

export const SearchBar = ({ phoneNumber, setPhoneNumber }) => {
  const [input, setInput] = useState({})

  const handleInputSubmit = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setPhoneNumber([...phoneNumber, {input, id: nanoid()}])
      e.target.value = ''
      // console.log(input)
    }
  }

  return (
    <div className={s.wrapper}>
      <input
        onChange={handleInputSubmit}
        onKeyDown={handleKeyPress}
        type='number'
        placeholder='Введите номер телефона'
      />
    </div>
  )
}

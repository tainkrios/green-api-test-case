/* eslint-disable react/prop-types */
import s from './chatInput.module.css'
import { SendButton } from 'src/components/sendButton'
import { useDeferredValue, useRef, useState } from 'react'
import { sendMessage } from 'src/shared/api/api'

export const ChatInput = ({ isChatActive }) => {
  const [input, setInput] = useState()
  const inputRef = useRef()

  const handleChange = () => {
    setInput(inputRef.current.value)
  }

  const deferredInput = useDeferredValue(input)

  const handleSendMessage = () => {
    sendMessage({
      chatId: `${isChatActive.input}@c.us`,
      message: deferredInput,
    })

    inputRef.current.value = ''
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleClick = () => {
    handleSendMessage()
  }

  return (
    <div className={s.wrapper}>
      <input
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type='text'
        placeholder='Введите сообщение'
      />
      <button onClick={handleClick}>
        <SendButton />
      </button>
    </div>
  )
}

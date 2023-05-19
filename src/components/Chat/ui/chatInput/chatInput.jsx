/* eslint-disable react/prop-types */
import s from './chatInput.module.css'
import { SendButton } from './../../../sendButton/sendButton'
import { useDeferredValue, useState } from 'react'
import { sendMessage } from '../../../../shared/api/api'

export const ChatInput = ({ isChatActive }) => {
  const [input, setInput] = useState()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const deferredInput = useDeferredValue(input)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage({
        chatId: `${isChatActive.input}@c.us`,
        message: deferredInput,
      })

      // setMessages([...messages, { text: deferredInput, isMe: true }])

      e.target.value = ''
    }
  }

  return (
    <div className={s.wrapper}>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type='text'
        placeholder='Введите сообщение'
      />
      <SendButton />
    </div>
  )
}

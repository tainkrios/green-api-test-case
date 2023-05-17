/* eslint-disable react/prop-types */
import { useState } from 'react'
import Logo from './assets/logo.png'
import s from './chat.module.css'
import { ChatBody } from './ui/chatBody/chatBody'
import { ChatHeader } from './ui/chatHeader/chatHeader'
import { ChatInput } from './ui/chatInput/chatInput'

export const Chat = ({ isChatActive }) => {
  const [messages, setmessages] = useState([])
  return (
    <>
      {isChatActive ? (
        <div className={s.wrapperChat}>
          <ChatHeader isChatActive={isChatActive} />
          <ChatBody
            messages={messages}
            setmessages={setmessages}
          />
          <ChatInput
            isChatActive={isChatActive}
            messages={messages}
            setmessages={setmessages}
          />
        </div>
      ) : (
        <div className={s.wrapper}>
          <div className={s.imgWrap}>
            <img
              src={Logo}
              alt='logo'
            />
          </div>
        </div>
      )}
    </>
  )
}

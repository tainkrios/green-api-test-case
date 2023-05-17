/* eslint-disable react/prop-types */
import Logo from './assets/logo.png'
import s from './chat.module.css'
import { ChatBody } from './ui/chatBody/chatBody'
import { ChatHeader } from './ui/chatHeader/chatHeader'
import { ChatInput } from './ui/chatInput/chatInput'

export const Chat = ({ isChatActive }) => {
  return (
    <>
      {isChatActive ? (
        <div className={s.wrapperChat}>
          <ChatHeader isChatActive={isChatActive} />
          <ChatBody />
          <ChatInput />
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

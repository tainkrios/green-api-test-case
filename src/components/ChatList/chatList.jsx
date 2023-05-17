import { Avatar } from '../avatar/avatar'
import s from './chatList.module.css'

/* eslint-disable react/prop-types */
export const ChatList = ({ phoneNumber, setIsChatActive }) => {
  return (
    <>
      {Array.isArray(phoneNumber)
        ? phoneNumber.map((number) => (
            <div
              className={s.wrapper}
              key={number.id}
              onClick={() => setIsChatActive(number)}
            >
              <Avatar />
              <div className={s.chatItem}>
                <h4>+{number.input}</h4>
                <p>last message</p>
              </div>
            </div>
          ))
        : null}
    </>
  )
}

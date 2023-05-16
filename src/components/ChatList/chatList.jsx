import Avatar from './assets/account.svg'
import s from './chatList.module.css'

/* eslint-disable react/prop-types */
export const ChatList = ({ phoneNumber }) => {
  return (
    <>
      {Array.isArray(phoneNumber)
        ? phoneNumber.map((number) => (
            <div
              className={s.wrapper}
              key={number.id}
            >
              <img
                src={Avatar}
                alt='avatar'
              />
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

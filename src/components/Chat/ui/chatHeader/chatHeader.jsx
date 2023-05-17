/* eslint-disable react/prop-types */
import { Avatar } from "../../../avatar/avatar"
import s from './chatHeader.module.css'

export const ChatHeader = ({ isChatActive }) => {
  return (
    <div>
      <div className={s.wrapper}>
        <Avatar />
        <div className={s.chatTitle}>
          <h4>+{isChatActive.input}</h4>
        </div>
      </div>
    </div>
  )
}

import { useState } from "react"
import { Chat } from "../Chat/chat"
import { Sidebar } from "../Sidebar/sidebar"
import s from './mainScreen.module.css'

export const MainScreen = () => {
  const [isChatActive, setIsChatActive] = useState({input: 123, id: 'hjkdfgh'})
  return (
    <div className={s.wrapper}>
      <Sidebar setIsChatActive={setIsChatActive} />
      <Chat isChatActive={isChatActive} />
    </div>
  )
}

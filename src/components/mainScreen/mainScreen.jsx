import { useState } from "react"
import { Chat } from "../Chat/chat"
import { Sidebar } from "../sidebar/sidebar"
import s from './mainScreen.module.css'

export const MainScreen = () => {
  const [isChatActive, setIsChatActive] = useState()
  return (
    <div className={s.wrapper}>
      <Sidebar setIsChatActive={setIsChatActive} />
      <Chat isChatActive={isChatActive} />
    </div>
  )
}

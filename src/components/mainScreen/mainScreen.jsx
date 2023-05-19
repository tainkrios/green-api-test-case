import { useState } from "react"
import { Sidebar } from "src/components/sidebar"
import { Chat } from "src/components/Chat"
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

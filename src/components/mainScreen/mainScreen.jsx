import { Chat } from "../Chat/chat"
import { Sidebar } from "../Sidebar/sidebar"
import s from './mainScreen.module.css'

export const MainScreen = () => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <Chat />
    </div>
  )
}

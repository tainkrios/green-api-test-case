/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ChatList } from '../chatList/chatList'
import { SearchBar } from '../searchBar/searchBar'
import s from './sidebar.module.css'

export const Sidebar = ({ setIsChatActive }) => {
  const [phoneNumber, setPhoneNumber] = useState([])
  return (
    <aside className={s.wrapper}>
      <SearchBar
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
      />
      <ChatList
        phoneNumber={phoneNumber}
        setIsChatActive={setIsChatActive}
      />
    </aside>
  )
}

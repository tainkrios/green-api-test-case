/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ChatList } from '../ChatList/chatList'
import { SearchBar } from '../SearchBar/searchBar'
import s from './sidebar.module.css'

export const Sidebar = ({ setIsChatActive }) => {
  const [phoneNumber, setPhoneNumber] = useState([])
  // console.log(phoneNumber)
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

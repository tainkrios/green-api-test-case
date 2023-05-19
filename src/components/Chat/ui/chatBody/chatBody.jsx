import { useEffect, useState, useRef } from 'react'
import { deleteNotification, receiveMessage } from 'src/shared/api/api'
import s from './chatBody.module.css'

/* eslint-disable react/prop-types */
export const ChatBody = ({ messages, setMessages, sender }) => {
  const [receipt, setReceipt] = useState()
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }

  const getNotification = async () => {
    try {
      const { data } = await receiveMessage()
      if (!data) {
        return
      }
      setReceipt(data)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  useEffect(() => {
    setMessages([])
  }, [sender.id])

  useEffect(() => {
    const int = setInterval(() => {
      if (sender.id) getNotification()
    }, 5000)

    return () => clearInterval(int)
  }, [sender.id])

  useEffect(() => {
    if (!receipt) {
      return
    }

    if (receipt.body.messageData) {
      const { messageData } = receipt.body

      let text
      switch (messageData.typeMessage) {
        case 'textMessage':
          text = messageData.textMessageData.textMessage
          break
        case 'extendedTextMessage':
          text = messageData.extendedTextMessageData.text
          break
      }
      const newMessage = {
        text,
        sender: receipt.body.senderData.sender === `${sender.input}@c.us`,
        id: receipt.body.idMessage,
      }
      const isIdExists = messages.some(
        (message) => message.id === newMessage.id,
      )

      if (!isIdExists) {
        setMessages((prevMessages) => [...prevMessages, newMessage])
        scrollToBottom()
      }

      deleteNotification(receipt.receiptId)
    }
  }, [receipt?.receiptId])

  return (
    <div className={s.chatWindow}>
      <div className={s.messages}>
        {Array.isArray(messages)
          ? messages.map((message, index) => (
              <div
                key={index}
                className={message.sender ? s.opponentMessage : s.myMessage}
              >
                <p>{message.text}</p>
              </div>
            ))
          : null}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

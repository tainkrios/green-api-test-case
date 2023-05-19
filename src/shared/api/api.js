import axios from 'axios'
import { getUrl } from './url'

const idInstance = localStorage.getItem('idInstance')
const apiToken = localStorage.getItem('apiToken')

export const axiosInstance = axios.create({
  baseURL: 'https://api.green-api.com/waInstance',
})

export const sendMessage = async (config) => {
  const { url } = getUrl(idInstance, apiToken, 'SendMessage')
  const res = await axiosInstance.post(url, config)
  return res.data
}

export const receiveMessage = async () => {
  const { url } = getUrl(idInstance, apiToken, 'ReceiveNotification')
  const res = await axiosInstance.get(url)
  const data = res.data
  return { data }
}

export const deleteNotification = async (receiptId) => {
  const { url } = getUrl(idInstance, apiToken, 'DeleteNotification', receiptId)
  const res = await axiosInstance.delete(url, receiptId)
  return res.data
}

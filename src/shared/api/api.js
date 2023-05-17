import axios from 'axios'
import { getUrl } from './url'

const idInstance = localStorage.getItem('idInstance')
const apiToken = localStorage.getItem('apiToken')

const { url } = getUrl(idInstance, apiToken)

export const axiosInstance = axios.create({
  baseURL: url,
})

export const apiFetcher = async (config) => {
  const res = await axiosInstance.post(url, config)
  return res.data
}

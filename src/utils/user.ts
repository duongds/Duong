import { saveCookie } from '@/utils/common'
import { AUTHEN_INFO_COOKIE, USER_INFO_COOKIE } from '@/constants/common'
import Cookies from 'universal-cookie'

export const getAuthenInfo = () => {
  const cookies = new Cookies()
  return cookies.get(AUTHEN_INFO_COOKIE)
}

export const saveAuthenInfo = (data: {
  username: string
  password: string
  accessToken: string
  refreshToken: string
  expireIn: number
  tokenType?: string
}) => {
  saveCookie(AUTHEN_INFO_COOKIE, data)
  return data
}
export const getUserInfo = () => {
  const cookies = new Cookies()
  return cookies.get(USER_INFO_COOKIE)
}

export const saveUserInfo = (data: {
  id: number
  name: string
  avatar: string | null
  phone: string
  status: string
}) => {
  saveCookie(USER_INFO_COOKIE, data)
  return data
}

export async function logOut() {
  const cookies = new Cookies()
  cookies.remove(AUTHEN_INFO_COOKIE)
  window.location.href = '/login'
}

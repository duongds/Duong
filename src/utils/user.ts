import { saveCookie, saveToLocalStorage } from '@/utils/common'
import { REFRESH_TOKEN_COOKIE, TOKEN_COOKIE, USER_INFO } from '@/constants/common'
import Cookies from 'universal-cookie'

export const getToken = () => {
  const cookies = new Cookies()
  return cookies.get(TOKEN_COOKIE)
}

export const getRefreshToken = () => {
  const cookies = new Cookies()
  return cookies.get(REFRESH_TOKEN_COOKIE)
}

export const saveAuthenInfo = (data: {
  accessToken: string
  refreshToken?: string
  expireIn: number
  tokenType?: string
}) => {
  saveCookie(TOKEN_COOKIE, data.accessToken)
  if (data.refreshToken) {
    saveCookie('refreshToken', data.refreshToken)
  }
}

export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO)
  return userInfo ? JSON.parse(userInfo) : null
}

export const saveUserInfo = (data: {
  id: number
  name: string
  avatar: string | null
  phone: string
  status: string
}) => {
  saveToLocalStorage(USER_INFO, data)
  return data
}

export async function logOut() {
  const cookies = new Cookies()
  cookies.remove(TOKEN_COOKIE)
  cookies.remove(REFRESH_TOKEN_COOKIE)
  window.location.href = '/login'
}

export const createNewCookie = (nameUser: string, value: string) => {
  const cookies = new Cookies()
  cookies.set(nameUser, value, { path: '/', secure: true })
}

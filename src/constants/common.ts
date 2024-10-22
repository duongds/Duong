import { IcUser } from '@/components/icons/common'
import { MenuProps } from '@/interfaces/common'

export const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || ''
export const AUTHEN_INFO_COOKIE = 'authenInfo'
export const USER_INFO = 'userInfo'
export const TOKEN_COOKIE = 'token'
export const REFRESH_TOKEN_COOKIE = 'refreshToken'

export const PATHS = {
  LOGIN: '/login',
  HOME: '/',
}

export const MENU_DASHBOARD: Array<MenuProps> = [
  {
    name: 'Page 1',
    icon: IcUser,
    url: '/page1',
  },
  {
    name: 'Page 2',
    icon: IcUser,
    url: '/page2',
  },
]

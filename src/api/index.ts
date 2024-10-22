import axios from 'axios'
import { getRefreshToken, getToken, logOut, saveAuthenInfo } from '@/utils/user'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVICE_URL,
  responseType: 'json',
})
let isRefreshing = false
let subscribers: Array<any> = []

function addSubscriber(callback: any) {
  subscribers.push(callback)
}

function onRrefreshed(new_token: any) {
  subscribers = subscribers.map((callback) => callback(new_token))
  subscribers = []
}

function logout() {
  subscribers = []
  logOut()
}

api.defaults.timeout = 600000
api.defaults.headers.post['Content-Type'] = 'application/json'

// request api
api.interceptors.request.use(
  async function (config) {
    const token: any = getToken()
    if (token && config && config.headers) {
      config.headers.Authorization = 'Bearer ' + token
    }
    config.headers.tcode = 'tms'
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// response api
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response && (error?.response?.status === 401 || error?.response?.statusCode === 401)) {
      const refreshToken: any = getRefreshToken()
      if (error.config.url.indexOf('refresh-token') !== -1) {
        logout()
      }
      if (refreshToken && !originalRequest._retry) {
        originalRequest._retry = true
        if (!isRefreshing) {
          isRefreshing = true
          try {
            const res = await axios.post(process.env.REACT_APP_API_SERVICE_URL + '/mid/v1/auth/refresh-token', {
              token: refreshToken,
              clientId: process.env.REACT_APP_CLIENT_ID,
            })
            const { data } = res.data
            isRefreshing = false
            saveAuthenInfo(data)
            onRrefreshed(data.accessToken)
            return new Promise((resolve) => {
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken
              originalRequest.headers['Authorization'] = 'Bearer ' + data.accessToken
              resolve(api(originalRequest))
            })
            //   .catch((err) => {
            //   if (err.response.data.statusCode === 401) {
            //     throw {
            //       message: 'You cannot edit this field in view-only mode.',
            //     }
            //   } else {
            //     throw err
            //   }
            // })
          } catch (error) {
            logout()
          }
        }
        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((new_token: any) => {
            originalRequest.headers.Authorization = `Bearer ${new_token}`
            resolve(api(originalRequest))
          })
        })
        return retryOriginalRequest
      } else {
        logout()
      }
    }
    return Promise.reject(error.response ? error.response.data : error)
  }
)

export default api

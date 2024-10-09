import api from "."

export const login = async (data: any) => {
  return await api({
    url: `/mid/v1/auth/login`,
    method: 'post',
    data,
  })
}

export const getUserInfoAPI = async () => {
  return await api({
    url: `/ams/admin/v1/users/profile`,
    method: 'get',
  })
}

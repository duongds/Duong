import React, { useState } from 'react'
import clsx from 'clsx'
import Logo1 from '@/assets/icons/logo_1.svg'
import BasicInput from '@/components/common/BasicInput'
import { Link } from '@mui/material'
import BasicButton from '@/components/common/BasicButton'
import { FormError } from '@/interfaces/common'
import { login } from '@/api/users'
import { CLIENT_ID } from '@/constants/common'
import { saveAuthenInfo } from '@/utils/user'
import { useNavigate } from 'react-router-dom'
import { setToast } from '@/redux/slices/common'
import { getUserInfoAC } from '@/redux/slices/user'
import { useAppDispatch } from '@/redux/hooks'

interface LoginData {
  username: string
  password: string
}

interface LoginError {
  username: FormError
  password: FormError
}

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [data, setData] = useState<LoginData>({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState<LoginError>({
    username: { show: false, message: '' },
    password: { show: false, message: '' },
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const onChangeData = (field: keyof LoginData, value: string) => {
    setData((prevState) => ({ ...prevState, [field]: value }))
    setErrors((prevState) => ({ ...prevState, [field]: { show: false, message: '' } }))
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res: any = await login({
        clientId: CLIENT_ID,
        grantType: 'password',
        username: data.username,
        password: data?.password,
      })

      if (res.data) {
        delete res.data.password
        if (!rememberMe) delete res.data.refreshToken
        saveAuthenInfo({
          ...data,
          ...res.data,
        })
        dispatch(getUserInfoAC())

        dispatch(setToast({ message: 'Đăng nhập thành công', type: 'success', show: true }))
        navigate('/')
        // window.location.href = '/'
      }
    } catch (err: any) {
      if (err?.code === 'error.mid.user.emailNotExist') {
        setErrors((prevState) => ({
          ...prevState,
          username: { show: true, message: 'Email chưa đăng ký tài khoản' },
        }))
      } else {
        setErrors((prevState) => ({
          ...prevState,
          password: { show: true, message: err.message },
        }))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={clsx('w-screen h-screen', 'flex ')}>
      <div className={'w-1/2 bg-primary hidden md:flex items-center justify-center'}>
        <img src={Logo1} alt={'Logo1'} />
      </div>
      <div className={'w-full md:w-1/2 flex items-center justify-center'}>
        <div className={'flex flex-col gap-[24px] max-w-[400px]'}>
          <h5 className={'font-inter-700 text-24-32 text-neutral'}>Đăng nhập vào hệ thống quản lý</h5>
          <div>
            <BasicInput
              autoFocus
              label={'Email'}
              name={'username'}
              placeholder={'example@gmail.com'}
              value={data.username}
              onChange={(event) => onChangeData('username', event.target.value.replaceAll(' ', ''))}
              error={errors.username}
            />
          </div>
          <div>
            <BasicInput
              label={'Mật khẩu'}
              type={'password'}
              name={'password'}
              // autoComplete="new-password"
              showIconPassword={true}
              value={data.password}
              onChange={(event) => onChangeData('password', event.target.value)}
              error={errors.password}
              onKeyPress={(event) => {
                if (event.code === 'Enter') handleSubmit()
              }}
            />
          </div>
          <div className={'flex justify-between'}>
            <label className={'flex items-center gap-[8px]'}>
              <input
                type={'checkbox'}
                checked={rememberMe}
                onChange={() => {
                  setRememberMe(!rememberMe)
                }}
                className={'w-[18px] h-[18px] rounded-[4px] border-[#DFE4EA]'}
              />
              <span className={'font-inter-500 text-14-24 text-neutral'}>Nhớ mật khẩu</span>
            </label>
            <Link href={'/forgot-password'}>
              <span className={'font-inter-600 text-14-24 text-[#C0905D]'}>Quên mật khẩu?</span>
            </Link>
          </div>
          <div>
            <BasicButton
              clases={'w-full'}
              disabled={!data.username || !data.password}
              onClick={handleSubmit}
              loading={loading}
            >
              Đăng nhập
            </BasicButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

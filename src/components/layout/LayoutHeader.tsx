import { Avatar, Drawer, IconButton, Menu, MenuItem } from '@mui/material'
import React, { MouseEventHandler, useState } from 'react'
import ListIcon from '@mui/icons-material/List'
import avatar from '@/assets/images/avatar-dragon.webp'
import Menus from '@/components/common/Menu'
import IntlDropdown from './IntlDropdown'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { logOut } from '@/utils/user'
import { setProfile } from '@/redux/slices/user'

const LayoutHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [modal, setModal] = useState<boolean>(false)
  const user = useAppSelector((state) => state.user.profile)
  const dispatch = useAppDispatch()

  const open = Boolean(anchorEl)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    logOut()
    dispatch(setProfile({}))
  }

  return (
    <div className="w-full h-[64px] px-[24px]  flex item-center border-b" style={{ borderBottom: '1px solid #E2E2EA' }}>
      <Drawer
        open={modal}
        onClose={() => {
          setModal(false)
        }}
        sx={{ width: '250px' }}
        anchor={'left'}
      >
        <Menus />
      </Drawer>
      <div className="w-full flex items-center justify-end space-x-3">
        <IntlDropdown />
        <div className="flex flex-row items-center">
          <div className="flex lg:hidden">
            <IconButton
              aria-label=""
              onClick={() => {
                setModal(true)
              }}
            >
              <ListIcon fontSize="large" color="primary" />
            </IconButton>
          </div>
        </div>
        <div className="flex gap-[18px] items-center">
          <div className="">
            <button className="flex gap-[10px] items-center cursor-pointer" onClick={handleClick}>
              <Avatar src={avatar} sx={{ width: 32, height: 32 }} />
              <div className="text-black text-14-20">
                <p className="font-inter-700 text-left">{user?.name}</p>
                <p className="font-inter-500 text-left">Demo 001</p>
              </div>
            </button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleLogout} className="menu-item">
                Đăng xuất
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutHeader

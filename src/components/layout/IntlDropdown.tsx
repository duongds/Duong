import { Menu, MenuItem } from '@mui/material'
import React, { MouseEventHandler, useState } from 'react'
import { useIntl } from '@/utils/IntlContext'

const IntlDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const intlContext = useIntl()

  const open = Boolean(anchorEl)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // ** Function to switch Language
  const handleLangUpdate = (e: any, lang: any) => {
    e.preventDefault()
    intlContext.switchLanguage(lang)
  }

  return (
    <div className="flex gap-[18px] items-center">
      <div className="">
        <button className="flex gap-[10px] items-center cursor-pointer" onClick={handleClick}>
          <p>Ngôn ngữ</p>
        </button>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={(e) => handleLangUpdate(e, 'vi')} className="menu-item">
            Tiếng việt
          </MenuItem>
          <MenuItem onClick={(e) => handleLangUpdate(e, 'en')} className="menu-item">
            Tiếng anh
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default IntlDropdown

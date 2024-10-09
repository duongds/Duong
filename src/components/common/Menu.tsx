import Logo from '@/assets/images/logo.svg'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { useLocation, useNavigate } from 'react-router-dom'
import { MENU_DASHBOARD } from '@/constants/common'
import { MenuProps } from '@/interfaces/common'

const Menu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [subId, setSubId] = useState<number | null>(null)

  const handleClick = (url: string) => {
    navigate(url)
  }

  const getInitialSubId = () => {
    const savedSubId = localStorage.getItem('subId')
    return savedSubId ? Number(savedSubId) : null
  }

  const toggeleSubTitle = (indx: number) => {
    const newSubId = subId !== indx ? indx : null
    setSubId(newSubId)
    localStorage.setItem('subId', newSubId?.toString() ?? '')
  }

  const renderMenu = (item: MenuProps, idx: number) => {
    const isOpen = subId === idx
    return (
      <div className={clsx('mx-2 flex-row w-100', item?.subMenu ? 'flex-1' : 'flex')}>
        {item?.subMenu ? (
          <div className="w-100 flex flex-col ">
            <button
              className="bg-white transition pl-4 pr-2 h-10 text-14-14 font-normal flex justify-between items-center rounded-md cursor-pointer"
              style={{
                lineHeight: '40px',
              }}
              onClick={() => {
                toggeleSubTitle(idx)
              }}
            >
              <div className="flex gap-2 items-center">
                {item?.icon && <item.icon width={22} height={22} />}
                <div className="font-inter-600 text-14-20">{item?.name}</div>
              </div>
              <ArrowForwardIosOutlinedIcon
                sx={{
                  fontSize: 16,
                  transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
                }}
                className={clsx('transition')}
              />
            </button>
            <div
              className={clsx('transition transform space-y-1 mb-2', isOpen && 'open')}
              style={{
                maxHeight: isOpen ? '300px' : '0',
                overflow: 'hidden',
              }}
            >
              {item?.subMenu?.map((el, idx) => (
                <div key={idx} className="flex">
                  {itemLink(el, true)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          itemLink(item, false)
        )}
      </div>
    )
  }

  const itemLink = (item: MenuProps, isSub: boolean) => {
    const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)
    return (
      <button
        className={clsx(
          'w-100 flex-1 h-[44px] rounded-md hover:bg-[#0000000f] text-black',
          !isSub ? 'pl-4' : 'pl-[48px]',
          isActive ? '!bg-primary-50' : ''
        )}
        onClick={() => {
          if (item.url) {
            handleClick(item.url)
          }
        }}
      >
        <div className="flex gap-2 items-center">
          {item?.icon && <item.icon width={22} height={22} color={isActive ? '#c0905d' : '#6A6A6A'} />}
          <div className="font-inter-600 text-14-20"> {item?.name}</div>
        </div>
      </button>
    )
  }

  useEffect(() => {
    setSubId(getInitialSubId())
  }, [])

  return (
    <div
      className="w-[250px] h-screen flex-1 transition-max-width duration-500 overflow-y-auto"
      style={{ borderRight: '1px solid #E2E2EA' }}
    >
      <div className="px-[20px] h-[64px] flex items-center justify-center">
        <div>
          <img width={140} height={40} className="w-full h-auto max-h-[50px]" src={Logo} alt="menu" />
        </div>
      </div>
      {MENU_DASHBOARD.map((menu: MenuProps, index: number) => {
        return (
          <div key={index} className="flex-1">
            {renderMenu(menu, index)}
          </div>
        )
      })}
    </div>
  )
}

export default Menu

import { FormError } from '@/interfaces/common'
import Error from '@/components/common/Error'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import Tooltip from '@mui/material/Tooltip'
import clsx from 'clsx'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef, useEffect, useState, useRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  isRequired?: boolean
  tooltip?: string
  classes?: string
  showIconPassword?: boolean
  showPasswordFirstTime?: boolean
  error?: FormError
  endAdornment?: React.ReactNode | string
  placeholderClasses?: string
  showIconCopy?: boolean
  onCopy?: () => void
  showCount?: boolean
  showIconEdit?: boolean
}

const BasicInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isRequired,
      tooltip,
      classes,
      showIconPassword,
      showPasswordFirstTime,
      type,
      error,
      endAdornment,
      placeholderClasses,
      showCount,
      showIconEdit,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
    const [htmlType, setHtmlType] = useState<HTMLInputTypeAttribute | undefined>('text')
    const [readOnly, setReadOnly] = useState<boolean>(!!props.readOnly)

    useEffect(() => {
      if (showPasswordFirstTime) {
        setHtmlType('text')
      } else {
        setHtmlType(type)
      }
      setIsShowPassword(!!showPasswordFirstTime)
    }, [type, showPasswordFirstTime])

    useEffect(() => {
      setReadOnly(props.readOnly || (!props.readOnly && !!showIconEdit))
    }, [showIconEdit, props.readOnly])

    const onTogglePasswod = (isShow: boolean) => {
      setIsShowPassword(isShow)
      setHtmlType(isShow ? 'text' : 'password')
    }

    return (
      <div className={'w-full'}>
        <label className="inputLabel block relative w-full">
          {label && (
            <p className={'block font-inter-600 text-16-20 text-neutral mb-[4px]'}>
              {label}
              &nbsp;
              {isRequired && <span className={'text-red'}>*</span>}
              &nbsp;
              {tooltip && (
                <Tooltip placement="top" title={tooltip} sx={{ fontSize: 16 }} arrow>
                  <HelpOutlineIcon />
                </Tooltip>
              )}
            </p>
          )}
          <input
            ref={ref || inputRef}
            className={clsx(
              'w-full h-[36px] text-14-18 px-[12px] py-[8px] rounded-[8px] text-neutral',
              `placeholder:${placeholderClasses ? placeholderClasses : 'text-[#C6C6C6]'}`,
              'shadow-xs',
              'bg-white',
              'focus:outline-none',
              'disabled:cursor-not-allowed disabled:text-[#C6C6C6]',
              'disabled:bg-neutral-50',
              {
                ['bg-white']: !readOnly,
                ['bg-neutral-50']: readOnly,
              },
              classes,
              {
                'border border-danger hover:border-danger focus:border-danger': error?.show,
                'border border-[#E5E7EB] hover:text-neutral hover:border-[#E5E7EB] focus:border-[#E5E7EB]':
                  !error?.show,
                'pr-[42px]': (type === 'password' && showIconPassword) || showIconEdit,
                'pr-[82px]': type === 'password' && showIconPassword,
              }
            )}
            type={htmlType}
            {...props}
            readOnly={readOnly}
          />
          {type === 'password' && showIconPassword && (
            <button className={`absolute right-[12px] bottom-[6px]`} onClick={() => onTogglePasswod(!isShowPassword)}>
              {isShowPassword ? (
                <VisibilityOutlinedIcon fontSize={'small'} />
              ) : (
                <VisibilityOffOutlinedIcon fontSize={'small'} />
              )}
            </button>
          )}
          {endAdornment}
        </label>

        {error && <Error {...error} />}

        {showCount && props.maxLength && (
          <p className={'font-maison-neue text-14-18 text-neutral-500 mt-[8px]'}>
            {props.value ? String(props.value).length : 0}/{props.maxLength} characters
          </p>
        )}
      </div>
    )
  }
)

export default BasicInput

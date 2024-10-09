import React from 'react'
import { IconProps } from '@/interfaces/common'

export const IcUser: React.FC<IconProps> = ({ width = 24, height = 24, color = '#6A6A6A' }) => (
  <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.99992 10.7371C12.3011 10.7371 14.1666 8.87166 14.1666 6.57048C14.1666 4.26929 12.3011 2.40381 9.99992 2.40381C7.69873 2.40381 5.83325 4.26929 5.83325 6.57048C5.83325 8.87166 7.69873 10.7371 9.99992 10.7371Z"
      fill={color}
    />
    <path
      d="M10 12.8208C5.82505 12.8208 2.42505 15.6208 2.42505 19.0708C2.42505 19.3041 2.60838 19.4875 2.84172 19.4875H17.1584C17.3917 19.4875 17.575 19.3041 17.575 19.0708C17.575 15.6208 14.175 12.8208 10 12.8208Z"
      fill={color}
    />
  </svg>
)
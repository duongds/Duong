import React from 'react'

interface Props {
  show: boolean
  message: string
  classes?: string
}

const Error: React.FC<Props> = ({ show, message, classes }) => {
  if (show) return <div className={`font-maison-neue text-14-18 text-red-700 mt-[4px] ${classes}`}>{message}</div>
  return null
}

export default Error

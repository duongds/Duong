export interface IconProps {
  width?: number
  height?: number
  color?: string
}

export interface MenuProps {
  name: string
  url?: string
  icon?: React.FC<IconProps>
  subMenu?: Array<MenuProps>
}

export interface FormError {
  show: boolean
  message: string
  showTooltip?: boolean
}

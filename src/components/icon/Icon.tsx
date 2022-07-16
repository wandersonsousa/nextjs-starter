import * as React from 'react'
import * as icons from './icons'

export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = 'small' | 'medium' | 'large'

interface IconProps {
  name: IconName
  size?: IconSize
}

/**
 * Icon
 */
export const Icon: React.FC<IconProps> = ({ name }) => {
  const { viewBox, id } = icons[name]
  return (
    <span>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}

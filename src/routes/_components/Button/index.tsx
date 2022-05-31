import { ReactNode } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: ReactNode
  size: 'small' | 'large'
  primary?: boolean
  onClick?: () => void
}

export const Button = ({ type, children, size, primary, onClick }: IButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cx(styles.button, styles[size], { [styles.primary]: primary })} onClick={onClick}>
      {children}
    </button>
  )
}

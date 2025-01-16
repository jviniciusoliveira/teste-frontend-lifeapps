import { ButtonHTMLAttributes } from 'react'
import { Link, LinkProps } from 'react-router'

import styles from './styles.module.css'

export type ButtonProps = {
  children: React.ReactNode
  to?: LinkProps['to']
  variant?: 'icon' | 'conteined' | 'rounded' | 'text'
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className']
  title?: ButtonHTMLAttributes<HTMLButtonElement>['title']
}

export function Button({
  to,
  onClick,
  className: propsClassName,
  variant = 'conteined',
  ...rest
}: ButtonProps) {
  const variantCss = {
    icon: styles.buttonIcon,
    conteined: styles.buttonConteined,
    rounded: styles.buttonRounded,
    text: styles.buttonText,
  }

  const className = propsClassName
    ? `${variantCss[variant]} ${propsClassName}`
    : variantCss[variant]

  if (!to) {
    return <button className={className} onClick={onClick} {...rest} />
  }
  return <Link className={className} to={to} {...rest} />
}

import { Link } from 'react-router'
import styles from './styles.module.css'
import { CardImage } from './card-image'
import { CardContent } from './card-content'

type CardProps = {
  children: React.ReactNode
  to?: string
  className?: HTMLDivElement['className']
}

export function Card({ to, className: propsClassName, ...rest }: CardProps) {
  const className = propsClassName
    ? `${styles.cardContainer} ${propsClassName}`
    : styles.cardContainer

  if (!to) {
    return <div className={className} {...rest} />
  }
  return <Link className={className} to={to} {...rest} />
}

Card.Image = CardImage
Card.Content = CardContent

import styles from './styles.module.css'

type CardImageProps = {
  children: React.ReactNode
}

export function CardImage({ children, ...rest }: CardImageProps) {
  return (
    <div className={styles.cardImage} {...rest}>
      {children}
    </div>
  )
}

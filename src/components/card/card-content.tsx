import styles from './styles.module.css'

type CardContentProps = {
  children: React.ReactNode
}

export function CardContent({ children, ...rest }: CardContentProps) {
  return (
    <div className={styles.cardContent} {...rest}>
      {children}
    </div>
  )
}

import styles from './styles.module.css'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          className={styles.paginationButton}
          onClick={() => onPageChange(pageNumber)}
          data-active={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  )
}

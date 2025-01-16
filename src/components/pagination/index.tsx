import styles from './styles.module.css'

import { Button } from '@/components/button'

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
      <Button
        variant="rounded"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        title="Primeira página"
      >
        &lt;&lt;
      </Button>
      {pageNumbers.map((pageNumber) => (
        <Button
          variant="rounded"
          onClick={() => onPageChange(pageNumber)}
          data-active={pageNumber === currentPage}
          title={`Página ${pageNumber}`}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        variant="rounded"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        title="Última página"
      >
        &gt;&gt;
      </Button>
    </div>
  )
}

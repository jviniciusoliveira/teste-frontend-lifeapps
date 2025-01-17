import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <div>
      <h1>Página não encontrada.</h1>
      <Button variant="text" to="/">
        Voltar para página inicial.
      </Button>
    </div>
  )
}

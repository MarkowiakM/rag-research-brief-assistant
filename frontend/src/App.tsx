import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'

type HealthResponse = {
  status: string
  service: string
}

function App() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['health'],
    queryFn: async () => (await api.get<HealthResponse>('/health')).data,
  })

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium">Briefly</h1>
      <p className="text-muted-foreground text-sm">
        {isLoading && 'Checking API…'}
        {isError && 'API unreachable'}
        {data && `${data.service}: ${data.status}`}
      </p>
      <Button onClick={() => refetch()}>Recheck</Button>
    </main>
  )
}

export default App

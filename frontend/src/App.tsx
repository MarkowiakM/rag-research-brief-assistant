import { useState } from 'react'
import { BriefView } from '@/components/BriefView'
import { NavBar } from '@/components/NavBar'
import { SearchScreen } from '@/components/SearchScreen'
import { mockBrief } from '@/mocks/brief'

type Status = 'idle' | 'generating' | 'ready'

const GENERATING_DELAY_MS = 600

function App() {
  const [status, setStatus] = useState<Status>('idle')
  const [query, setQuery] = useState('')

  function handleSubmit(submittedQuery: string) {
    setQuery(submittedQuery)
    setStatus('generating')
    setTimeout(() => setStatus('ready'), GENERATING_DELAY_MS)
  }

  return (
    <div className="flex min-h-svh flex-col">
      <NavBar />
      {status === 'idle' && <SearchScreen onSubmit={handleSubmit} />}
      {status === 'generating' && (
        <div
          role="status"
          aria-label="Generating your brief…"
          className="mx-auto flex w-full max-w-160 flex-1 items-center px-4 py-8"
        >
          <div className="h-40 w-full animate-pulse rounded-xl bg-card ring-1 ring-foreground/10" />
        </div>
      )}
      {status === 'ready' && <BriefView brief={{ ...mockBrief, query }} />}
    </div>
  )
}

export default App

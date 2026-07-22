import { useEffect, useState } from 'react'
import { BriefView } from '@/components/BriefView'
import { NavBar } from '@/components/NavBar'
import { SearchScreen } from '@/components/SearchScreen'
import { mockBrief } from '@/mocks/brief'

type Status = 'idle' | 'generating' | 'ready'
type Theme = 'light' | 'dark'

const GENERATING_DELAY_MS = 600
const THEME_STORAGE_KEY = 'briefly-theme'

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [status, setStatus] = useState<Status>('idle')
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  function handleSubmit(submittedQuery: string) {
    setQuery(submittedQuery)
    setStatus('generating')
    setTimeout(() => setStatus('ready'), GENERATING_DELAY_MS)
  }

  function handleGoHome() {
    setStatus('idle')
    setQuery('')
  }

  function handleToggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="flex min-h-svh flex-col">
      <NavBar theme={theme} onGoHome={handleGoHome} onToggleTheme={handleToggleTheme} />
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

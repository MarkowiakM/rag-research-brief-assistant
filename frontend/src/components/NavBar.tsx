import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NavBarProps = {
  theme: 'light' | 'dark'
  onGoHome: () => void
  onToggleTheme: () => void
}

function NavBar({ theme, onGoHome, onToggleTheme }: NavBarProps) {
  return (
    <header className="flex items-center justify-between border-b px-4 py-4 sm:px-8">
      <button type="button" onClick={onGoHome} className="font-heading text-base font-bold">
        Briefly
      </button>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">History</span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  )
}

export { NavBar }

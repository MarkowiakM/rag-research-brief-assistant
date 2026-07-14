import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { suggestedPrompts } from '@/mocks/brief'

type SearchScreenProps = {
  onSubmit: (query: string) => void
}

function SearchScreen({ onSubmit }: SearchScreenProps) {
  const [query, setQuery] = useState('')

  function submitQuery(value: string) {
    const trimmed = value.trim()
    if (trimmed) {
      onSubmit(trimmed)
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    submitQuery(query)
  }

  return (
    <main className="mx-auto flex min-h-[calc(100svh-65px)] w-full max-w-160 flex-col items-center justify-center gap-7 px-4 text-center">
      <h1 className="font-heading text-4xl font-bold">Briefly</h1>
      <p className="max-w-120 text-[17px] text-muted-foreground">
        Turn a research question into a structured, source-grounded research brief.
      </p>
      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask a research question…"
          aria-label="Research question"
          className="h-11 rounded-[10px] px-4"
        />
        <Button type="submit" size="lg" className="rounded-[10px] px-4">
          Ask
        </Button>
      </form>
      <div className="flex flex-wrap justify-center gap-2">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => submitQuery(prompt)}
            className="rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground hover:bg-secondary/80"
          >
            {prompt}
          </button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Sources: OpenAlex · Semantic Scholar — every claim is cited to a retrieved paper.
      </p>
    </main>
  )
}

export { SearchScreen }

import { Input } from '@/components/ui/input'
import type { Source } from '@/mocks/brief'

type SourcesSidebarProps = {
  sources: Source[]
}

function SourcesSidebar({ sources }: SourcesSidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-4 bg-card p-4 sm:w-85 sm:border-l sm:p-6">
      <span className="text-sm font-medium">Sources used ({sources.length})</span>
      <div className="flex flex-col gap-3">
        {sources.map((source) => (
          <div key={source.id} className="rounded-[9px] border p-3">
            <p className="text-[13px] font-semibold">{source.title}</p>
            <p className="text-xs text-muted-foreground">
              {source.authors} · {source.year} · {source.venue}
            </p>
          </div>
        ))}
      </div>
      <Input
        disabled
        placeholder="Ask a follow-up about these sources…"
        aria-label="Ask a follow-up about these sources"
        className="mt-auto rounded-full"
      />
    </aside>
  )
}

export { SourcesSidebar }

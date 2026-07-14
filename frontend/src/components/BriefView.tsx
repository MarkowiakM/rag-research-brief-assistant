import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SourcesSidebar } from '@/components/SourcesSidebar'
import type { ResearchBrief } from '@/mocks/brief'

type BriefViewProps = {
  brief: ResearchBrief
}

function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function BriefView({ brief }: BriefViewProps) {
  return (
    <div className="mx-auto flex max-w-300 flex-col sm:flex-row">
      <div className="flex flex-1 flex-col gap-6 px-4 py-8 sm:px-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-[13px] text-muted-foreground">Research question</span>
          <h1 className="font-heading text-2xl font-bold">{brief.query}</h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{brief.sources.length} sources</span>
          <span>Generated {formatDate(brief.generatedAt)}</span>
          <Button variant="outline" disabled className="ml-auto">
            Export to Markdown
          </Button>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-2">
            <span className="text-xs font-medium tracking-wide text-primary uppercase">TL;DR</span>
            <p className="text-[15px] leading-relaxed">{brief.tldr}</p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Key concepts
          </span>
          <div className="flex flex-wrap gap-2">
            {brief.concepts.map((concept) => (
              <Badge key={concept} variant="secondary">
                {concept}
              </Badge>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary hover:bg-secondary">
                <TableHead>Claim</TableHead>
                <TableHead>Evidence</TableHead>
                <TableHead className="w-50">Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {brief.claims.map((row) => (
                <TableRow key={row.claim}>
                  <TableCell className="whitespace-normal">{row.claim}</TableCell>
                  <TableCell className="whitespace-normal">{row.evidence}</TableCell>
                  <TableCell className="whitespace-normal text-primary">{row.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Suggested reading order
            </span>
            <ol className="list-decimal space-y-1 pl-5 text-sm">
              {brief.readingOrder.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Open questions
            </span>
            <ul className="space-y-1 text-sm">
              {brief.openQuestions.map((item) => (
                <li key={item} className="flex gap-1.5">
                  <span aria-hidden>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SourcesSidebar sources={brief.sources} />
    </div>
  )
}

export { BriefView }

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SourcesSidebar } from './SourcesSidebar'
import { mockBrief } from '@/mocks/brief'

describe('SourcesSidebar', () => {
  it('renders the source count and every source title and meta line', () => {
    render(<SourcesSidebar sources={mockBrief.sources} />)

    expect(screen.getByText(`Sources used (${mockBrief.sources.length})`)).toBeInTheDocument()
    for (const source of mockBrief.sources) {
      expect(screen.getByText(source.title)).toBeInTheDocument()
      expect(
        screen.getByText(`${source.authors} · ${source.year} · ${source.venue}`),
      ).toBeInTheDocument()
    }
  })
})

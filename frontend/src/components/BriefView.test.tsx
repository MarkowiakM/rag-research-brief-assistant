import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BriefView } from './BriefView'
import { mockBrief } from '@/mocks/brief'

describe('BriefView', () => {
  it('renders the question, TL;DR, and key concepts', () => {
    render(<BriefView brief={mockBrief} />)

    expect(screen.getByRole('heading', { name: mockBrief.query })).toBeInTheDocument()
    expect(screen.getByText(mockBrief.tldr)).toBeInTheDocument()
    for (const concept of mockBrief.concepts) {
      expect(screen.getByText(concept)).toBeInTheDocument()
    }
  })

  it('renders the claim, evidence, and source for every row', () => {
    render(<BriefView brief={mockBrief} />)

    for (const row of mockBrief.claims) {
      expect(screen.getByText(row.claim)).toBeInTheDocument()
      expect(screen.getByText(row.evidence)).toBeInTheDocument()
    }
  })

  it('renders the reading order and open questions', () => {
    render(<BriefView brief={mockBrief} />)

    for (const item of mockBrief.readingOrder) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    for (const item of mockBrief.openQuestions) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })
})

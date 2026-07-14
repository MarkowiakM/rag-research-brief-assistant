import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('shows the empty-state search screen on load', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Briefly' })).toBeInTheDocument()
    expect(screen.getByLabelText('Research question')).toBeInTheDocument()
  })

  it('renders the mocked brief for the submitted question', async () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Research question'), {
      target: { value: 'How is RAG evaluation usually done?' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Ask' }))

    expect(
      await screen.findByRole('heading', {
        name: 'How is RAG evaluation usually done?',
      }),
    ).toBeInTheDocument()
  })
})

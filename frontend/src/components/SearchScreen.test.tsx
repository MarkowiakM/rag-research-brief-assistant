import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { SearchScreen } from './SearchScreen'
import { suggestedPrompts } from '@/mocks/brief'

describe('SearchScreen', () => {
  it('submits the trimmed query when the form is submitted', () => {
    const onSubmit = vi.fn()
    render(<SearchScreen onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText('Research question'), {
      target: { value: '  How is RAG evaluation usually done?  ' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Ask' }))

    expect(onSubmit).toHaveBeenCalledWith('How is RAG evaluation usually done?')
  })

  it('submits a suggested prompt when its chip is clicked', () => {
    const onSubmit = vi.fn()
    render(<SearchScreen onSubmit={onSubmit} />)

    fireEvent.click(screen.getByRole('button', { name: suggestedPrompts[0] }))

    expect(onSubmit).toHaveBeenCalledWith(suggestedPrompts[0])
  })

  it('does not submit an empty query', () => {
    const onSubmit = vi.fn()
    render(<SearchScreen onSubmit={onSubmit} />)

    fireEvent.click(screen.getByRole('button', { name: 'Ask' }))

    expect(onSubmit).not.toHaveBeenCalled()
  })
})

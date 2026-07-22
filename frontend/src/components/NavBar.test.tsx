import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { NavBar } from './NavBar'

describe('NavBar', () => {
  it('calls onGoHome when the wordmark is clicked', () => {
    const onGoHome = vi.fn()
    render(<NavBar theme="light" onGoHome={onGoHome} onToggleTheme={vi.fn()} />)

    fireEvent.click(screen.getByRole('button', { name: 'Briefly' }))

    expect(onGoHome).toHaveBeenCalled()
  })

  it('calls onToggleTheme when the theme button is clicked', () => {
    const onToggleTheme = vi.fn()
    render(<NavBar theme="light" onGoHome={vi.fn()} onToggleTheme={onToggleTheme} />)

    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))

    expect(onToggleTheme).toHaveBeenCalled()
  })

  it('labels the theme button for the opposite theme when dark', () => {
    render(<NavBar theme="dark" onGoHome={vi.fn()} onToggleTheme={vi.fn()} />)

    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
  })
})

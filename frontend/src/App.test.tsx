import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App'
import { api } from '@/lib/api'

vi.mock('@/lib/api', () => ({
  api: { get: vi.fn() },
}))

function renderApp() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  )
}

describe('App', () => {
  it('shows the health status once the API responds', async () => {
    vi.mocked(api.get).mockResolvedValue({
      data: { status: 'ok', service: 'briefly-api' },
    })

    renderApp()

    expect(await screen.findByText('briefly-api: ok')).toBeInTheDocument()
  })

  it('shows an error message when the API is unreachable', async () => {
    vi.mocked(api.get).mockRejectedValue(new Error('network error'))

    renderApp()

    expect(await screen.findByText('API unreachable')).toBeInTheDocument()
  })
})

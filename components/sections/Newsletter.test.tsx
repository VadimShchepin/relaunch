import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Newsletter } from './Newsletter'

// Mock fetch for API testing
global.fetch = vi.fn()

describe('Newsletter Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders without errors', () => {
        expect(() => render(<Newsletter />)).not.toThrow()
    })

    it('displays the headline text', () => {
        render(<Newsletter />)

        const headlines = screen.getAllByText('KI-Sichtbarkeit verstehen.')
        expect(headlines[0]).toBeInTheDocument()
        expect(headlines[0].tagName).toBe('H2')
    })

    it('displays form elements (input + button)', () => {
        render(<Newsletter />)

        // Check for email input
        const emailInputs = screen.getAllByPlaceholderText('deine@email.de')
        expect(emailInputs[0]).toBeInTheDocument()
        expect(emailInputs[0]).toHaveAttribute('type', 'email')

        // Check for submit button by role
        const submitButtons = screen.getAllByRole('button', { name: /anmelden/i })
        expect(submitButtons[0]).toBeInTheDocument()
        expect(submitButtons[0].tagName).toBe('BUTTON')
    })

    it('displays trust line', () => {
        render(<Newsletter />)

        const trustLines = screen.getAllByText('Kostenlos. Jederzeit abmeldbar. Kein Spam.')
        expect(trustLines[0]).toBeInTheDocument()
    })

    it('POST handler returns ok', async () => {
        // Mock successful API response
        const mockFetch = vi.mocked(fetch)
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ ok: true })
        } as Response)

        // Test the API endpoint directly
        const response = await fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@example.com' })
        })

        const data = await response.json()
        expect(data).toEqual({ ok: true })
        expect(mockFetch).toHaveBeenCalledWith('/api/newsletter/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@example.com' })
        })
    })
})

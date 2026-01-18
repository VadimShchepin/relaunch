import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutMe } from './AboutMe'

describe('AboutMe Component', () => {
    it('renders without errors', () => {
        expect(() => render(<AboutMe />)).not.toThrow()
    })

    it('displays the headline text', () => {
        render(<AboutMe />)

        const headlines = screen.getAllByText('Warum ich das mache.')
        expect(headlines[0]).toBeInTheDocument()
        expect(headlines[0].tagName).toBe('H2')
    })
})
import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Page from './page'

// Mock fetch for Newsletter component
global.fetch = vi.fn()

// Mock video play method
Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    writable: true,
    value: vi.fn().mockResolvedValue(undefined),
})

describe('Page Layout Integration', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders all sections without errors', () => {
        expect(() => render(<Page />)).not.toThrow()
    })

    it('verifies navigation IDs are present', () => {
        render(<Page />)

        // Check that the required navigation IDs exist
        expect(document.getElementById('reality')).toBeInTheDocument()
        expect(document.getElementById('proof')).toBeInTheDocument()
        expect(document.getElementById('differentiation')).toBeInTheDocument()
        expect(document.getElementById('process')).toBeInTheDocument()
        expect(document.getElementById('about')).toBeInTheDocument()
        expect(document.getElementById('offer')).toBeInTheDocument()
        expect(document.getElementById('faq')).toBeInTheDocument()
        expect(document.getElementById('contact')).toBeInTheDocument()
        expect(document.getElementById('newsletter')).toBeInTheDocument()
    })

    it('displays sections in correct DOM order', () => {
        render(<Page />)

        // Get all section containers by their IDs
        const realitySection = document.getElementById('reality')
        const proofSection = document.getElementById('proof')
        const differentiationSection = document.getElementById('differentiation')
        const processSection = document.getElementById('process')
        const aboutSection = document.getElementById('about')
        const offerSection = document.getElementById('offer')
        const faqSection = document.getElementById('faq')
        const finalCTASection = document.getElementById('contact')
        const newsletterSection = document.getElementById('newsletter')

        // Verify all sections exist
        expect(realitySection).toBeInTheDocument()
        expect(proofSection).toBeInTheDocument()
        expect(differentiationSection).toBeInTheDocument()
        expect(processSection).toBeInTheDocument()
        expect(aboutSection).toBeInTheDocument()
        expect(offerSection).toBeInTheDocument()
        expect(faqSection).toBeInTheDocument()
        expect(finalCTASection).toBeInTheDocument()
        expect(newsletterSection).toBeInTheDocument()

        // Get the main container
        const mainContainer = realitySection?.parentElement

        if (mainContainer) {
            const sections = Array.from(mainContainer.children)

            // Find indices of each section
            const realityIndex = sections.indexOf(realitySection!)
            const proofIndex = sections.indexOf(proofSection!)
            const differentiationIndex = sections.indexOf(differentiationSection!)
            const processIndex = sections.indexOf(processSection!)
            const aboutIndex = sections.indexOf(aboutSection!)
            const offerIndex = sections.indexOf(offerSection!)
            const faqIndex = sections.indexOf(faqSection!)
            const finalCTAIndex = sections.indexOf(finalCTASection!)
            const newsletterIndex = sections.indexOf(newsletterSection!)

            // Verify the order: Process → AboutMe → Offer → FAQ → FinalCTA → Newsletter
            expect(processIndex).toBeLessThan(aboutIndex)
            expect(aboutIndex).toBeLessThan(offerIndex)
            expect(offerIndex).toBeLessThan(faqIndex)
            expect(faqIndex).toBeLessThan(finalCTAIndex)
            expect(finalCTAIndex).toBeLessThan(newsletterIndex)

            // Also verify the complete order including earlier sections
            expect(realityIndex).toBeLessThan(proofIndex)
            expect(proofIndex).toBeLessThan(differentiationIndex)
            expect(differentiationIndex).toBeLessThan(processIndex)
        }
    })
})
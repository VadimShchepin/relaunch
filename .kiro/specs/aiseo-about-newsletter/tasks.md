# Implementation Plan: About-me and Newsletter Sections

## Overview

This implementation adds two new sections to the AISEO website: an About-me section after the Process section and a Newsletter section after the FAQ section. The approach focuses on creating static components with consistent styling, integrating them into the existing page structure, and cleaning up the FAQ section.

## Tasks

- [x] 1. Create AboutMe section component
  - Create `components/sections/AboutMe.tsx` with TypeScript React component
  - Include German headline "Warum ich das mache."
  - Add body paragraphs explaining the no-rankings/SEO-packages approach
  - Include closing line "KI-Sichtbarkeit ist kein Trick. Sie ist das Ergebnis einer klaren Website."
  - Use existing FadeIn component for animations
  - Apply consistent styling with existing sections using bg-brand-bg and proper padding
  - _Requirements: 1.1, 1.2, 1.3, 1.5, 4.1, 4.2, 5.1, 5.2_

- [x] 1.1 Write smoke test for AboutMe component
  - Test that component renders without errors
  - Verify headline text appears in rendered output
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Create Newsletter section component
  - Create `components/sections/Newsletter.tsx` with TypeScript React component
  - Include German headline "KI-Sichtbarkeit verstehen."
  - Add subline about AI selection updates
  - Create email input field with type="email"
  - Add "Updates erhalten" CTA button using existing Button component
  - Include trust line "Kein Spam. Keine Funnels. Abmeldung jederzeit."
  - Implement basic form state management
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 4.1, 4.2, 5.1, 5.2_

- [x] 2.1 Implement newsletter form functionality
  - Add form submission handler with basic email validation (required + email regex)
  - Create App Router API endpoint `app/api/subscribe/route.ts` that returns `{ok: true}`
  - Implement success state showing "Danke für dein Interesse!" message
  - Add error handling for form submission failures with inline error display
  - Include loading state during form submission
  - _Requirements: 2.5, 2.6, 5.4_

- [x] 2.2 Write smoke test for Newsletter component
  - Test that component renders without errors
  - Verify form elements (input + button) are present
  - Test that POST handler returns ok (no complex form flow testing)
  - _Requirements: 2.1, 2.3, 2.5_

- [x] 3. Integrate sections into main page layout
  - Update `app/page.tsx` to import new components
  - Insert AboutMe after Process and before Offer
  - Keep FinalCTA after FAQ (current position)
  - Insert Newsletter after FinalCTA and before Footer
  - Add ids: "about" and "newsletter" for navigation
  - Verify order in DOM: Process → AboutMe → Offer → FAQ → FinalCTA → Newsletter → Footer
  - _Requirements: 1.4, 2.7, 3.1, 5.1_

- [x] 3.1 Write integration test for page layout
  - Test that sections appear in correct DOM order
  - Verify all sections render on the complete page
  - _Requirements: 1.4, 2.7, 3.1_

- [x] 4. Review FAQ section (minimal cleanup)
  - Verify `components/sections/FAQ.tsx` renders all Q/A content fully visible
  - Confirm no broken toggle buttons exist (component is already clean)
  - Preserve existing FAQ schema markup for SEO
  - No changes needed if FAQ is already functioning correctly
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 5. Manual QA checklist
  - Verify section order: Process → AboutMe → Offer → FAQ → FinalCTA → Newsletter → Footer
  - Verify headings use h2 elements for SEO compliance
  - Verify mobile spacing and responsive design (no overflow)
  - Verify newsletter submit shows success state
  - Verify FAQ has no toggle buttons and JSON-LD schema is present
  - Test complete page rendering without layout shifts

- [x] 6. Final styling and consistency review
  - Verify both sections use consistent spacing with existing sections
  - Ensure proper h2 heading hierarchy for SEO
  - Confirm responsive design matches existing patterns
  - Validate that no new dependencies were added
  - Check that all German copy matches requirements exactly
  - _Requirements: 3.2, 3.3, 3.5, 4.1, 5.3, 5.5_

## Notes

- Tasks marked with `*` are optional smoke tests that can be skipped for faster MVP
- Each task references specific requirements for traceability
- Components use existing UI patterns and design system
- Newsletter form starts with stub implementation for rapid deployment
- No new external dependencies or complex animations required
- Focus on text-only content to avoid layout shifts
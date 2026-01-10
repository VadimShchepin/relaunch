# Implementation Plan: Content Refinement

## Overview

Refine aiseo.hamburg content: add authority anchor, reduce target segments, compress differentiation, verify CTA/FAQ constraints.

## Tasks

- [x] 1. Add authority anchor to Differentiation section
  - Add AUTHORITY constant with name, role, location, focus
  - Render authority block below the photo overlay text
  - Use compact styling (text-sm, tight spacing)
  - Keep to 4 lines maximum
  - _Requirements: 1.1, 1.2, 1.5_

- [x] 2. Reduce target segments from 4 to 3
  - Merge "B2B Unternehmen" into "Spezialisierte Dienstleister"
  - Update TARGETS array to 3 items
  - Update grid from `lg:grid-cols-4` to `lg:grid-cols-3`
  - _Requirements: 2.1, 2.2_

- [x] 3. Compress Differentiation spacing
  - Reduce agency comparison card padding from `p-8` to `p-6`
  - Reduce spacing between cards from `space-y-6` to `space-y-4`
  - _Requirements: 3.1, 3.4_

- [x] 4. Verify CTA consistency
  - Audit all Button components across page
  - Ensure max 3 CTAs (Hero, Offer, FinalCTA)
  - Standardize button text to "Check anfordern" or "KI-Sichtbarkeit prüfen"
  - _Requirements: 4.1, 4.3_

- [x] 5. Verify FAQ constraints
  - Confirm FAQS array has exactly 5 items
  - Confirm each answer is max 2 sentences
  - Confirm schema.org FAQPage markup is present
  - _Requirements: 5.1, 5.2, 5.4_

- [x] 6. Final verification
  - Ensure page renders without errors
  - Visual check: authority anchor visible, 3 target segments, compressed spacing
  - _Requirements: 1.1, 2.1, 3.1_

## Notes

- Hero section remains unchanged per user request
- This is a content refinement pass, not a structural change
- No new components created - all changes in existing files
- Property test for FAQ answer length is optional (content is static)

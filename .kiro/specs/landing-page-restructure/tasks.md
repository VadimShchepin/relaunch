# Implementation Plan: Landing Page Restructure

## Overview

Restructure aiseo.hamburg from 14 sections to 7 focused sections. Remove redundant components, merge related content, and establish clear visual hierarchy.

## Tasks

- [x] 1. Remove redundant section components
  - Remove Transformation.tsx import from page.tsx
  - Remove Measurement.tsx import from page.tsx
  - Remove Newsletter.tsx import from page.tsx
  - Remove TargetGroup.tsx import from page.tsx
  - Remove Process.tsx import from page.tsx
  - Delete the component files after confirming page renders
  - _Requirements: 1.5, 1.6, 1.7_

- [x] 2. Merge TargetGroup content into Differentiation
  - Add "Für wen" section to Differentiation.tsx before the agency comparison
  - Include the 4 target categories: Spezialisierte Dienstleister, Lokale Anbieter, B2B Unternehmen, Vertrauens-Branchen
  - Maintain dark background (#121212) for the entire section
  - Keep the agency comparison cards below the target group content
  - _Requirements: 1.7, 2.5_

- [x] 3. Merge Process steps into Offer section
  - Add the 3 process steps inline within Offer.tsx
  - Position steps below the check deliverables list
  - Use compact visual treatment (not full cards)
  - Keep the CTA form card prominent
  - _Requirements: 1.7, 2.6_

- [x] 4. Move Newsletter signup to Footer
  - Add newsletter signup form to Footer.tsx
  - Use compact inline form (email input + submit button)
  - Position above or alongside existing footer content
  - Remove standalone Newsletter section reference
  - _Requirements: 1.7_

- [x] 5. Convert FAQ to collapsible accordion
  - Replace expanded FAQ cards with collapsible accordion pattern
  - First item can be expanded by default
  - Use subtle expand/collapse animation
  - Maintain schema-optimized structure for SEO
  - _Requirements: 4.4_

- [x] 6. Verify final page structure and cleanup
  - Confirm page.tsx imports exactly: Navbar, Hero, Reality, Proof, Differentiation, Offer, Objections, FAQ, FinalCTA, Footer
  - Delete unused component files: Transformation.tsx, Measurement.tsx, Newsletter.tsx, TargetGroup.tsx, Process.tsx
  - Verify page renders without errors
  - Confirm CTA count does not exceed 4
  - _Requirements: 1.1, 4.1_

## Notes

- Hero and Reality sections are preserved unchanged per user request
- Proof section remains as-is (already consolidated)
- Objections section remains as-is (brief qualification filter)
- FinalCTA section remains as-is
- Measurement content will be used for future /messung EEAT subpage (not part of this task)

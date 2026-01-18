# Requirements Document

## Introduction

This specification defines the requirements for implementing two new sections on the AISEO website: an About-me section and a Newsletter section. These sections will enhance credibility and capture subscriber interest while maintaining the existing design consistency and layout structure.

## Glossary

- **AISEO_Website**: The existing Next.js website for AI SEO services
- **About_Section**: The new "Warum ich das mache" section explaining the approach and background
- **Newsletter_Section**: The new "KI-Sichtbarkeit verstehen" section for capturing email subscribers
- **Process_Section**: The existing "Der Weg zur Relevanz" section with 01/02/03 cards
- **FAQ_Section**: The existing frequently asked questions section
- **Final_CTA**: The existing "Bereit? Lass uns prüfen" call-to-action section
- **Footer**: The existing website footer component
- **Swiss_Design**: The minimal, clean design aesthetic with off-white backgrounds and consistent spacing

## Requirements

### Requirement 1: About-me Section Implementation

**User Story:** As a website visitor, I want to understand the service provider's background and approach, so that I can build trust and confidence in their expertise.

#### Acceptance Criteria

1. WHEN the About_Section is rendered, THE AISEO_Website SHALL display the headline "Warum ich das mache."
2. WHEN the About_Section is rendered, THE AISEO_Website SHALL display body text explaining the no-rankings/no-SEO-packages approach
3. WHEN the About_Section is rendered, THE AISEO_Website SHALL display the closing line "KI-Sichtbarkeit ist kein Trick. Sie ist das Ergebnis einer klaren Website."
4. WHEN the page loads, THE About_Section SHALL appear after the Process_Section and before the Offer_Section
5. WHEN the About_Section is displayed, THE AISEO_Website SHALL maintain consistent Swiss_Design styling with existing sections

### Requirement 2: Newsletter Section Implementation

**User Story:** As a website visitor interested in AI visibility updates, I want to subscribe to relevant content, so that I can stay informed about AI selection criteria and website optimization.

#### Acceptance Criteria

1. WHEN the Newsletter_Section is rendered, THE AISEO_Website SHALL display the headline "KI-Sichtbarkeit verstehen."
2. WHEN the Newsletter_Section is rendered, THE AISEO_Website SHALL display a subline about updates on AI selection
3. WHEN the Newsletter_Section is rendered, THE AISEO_Website SHALL display a CTA button labeled "Updates erhalten"
4. WHEN the Newsletter_Section is rendered, THE AISEO_Website SHALL display the trust line "Kein Spam. Keine Funnels. Abmeldung jederzeit."
5. WHEN the Newsletter_Section is rendered, THE AISEO_Website SHALL include an email input field with type="email" and submit functionality
6. WHEN the Newsletter_Section form is submitted, THE AISEO_Website SHALL display success and error states with minimal feedback
7. WHEN the page loads, THE Newsletter_Section SHALL appear after the Final_CTA and before the Footer
8. WHEN the Newsletter_Section is displayed, THE AISEO_Website SHALL maintain consistent Swiss_Design styling with existing sections

### Requirement 3: Layout Integration

**User Story:** As a website visitor, I want the new sections to feel like natural parts of the existing website, so that my browsing experience remains seamless and professional.

#### Acceptance Criteria

1. WHEN new sections are added, THE AISEO_Website SHALL preserve the existing section order except for the specified insertions
2. WHEN new sections are rendered, THE AISEO_Website SHALL maintain consistent spacing and background colors with existing sections
3. WHEN new sections are displayed, THE AISEO_Website SHALL use proper heading hierarchy with h2 elements for SEO compliance
4. WHEN the page loads, THE AISEO_Website SHALL add no images above the fold in new sections and cause no async layout shifts
5. WHEN viewed on mobile devices, THE AISEO_Website SHALL display new sections with responsive design matching existing sections

### Requirement 4: Content Management

**User Story:** As a content manager, I want the section content to be easily maintainable, so that I can update copy without complex technical changes.

#### Acceptance Criteria

1. WHEN sections are implemented, THE AISEO_Website SHALL use hardcoded German copy as specified in the requirements
2. WHEN sections are created, THE AISEO_Website SHALL keep copy in a single constant per component for easy edits
3. WHEN bullet points are included, THE AISEO_Website SHALL make them optional and easily configurable
4. WHEN content needs updates, THE AISEO_Website SHALL allow modifications without changing component structure

### Requirement 5: Technical Implementation

**User Story:** As a developer, I want the new sections to follow existing patterns and constraints, so that the codebase remains consistent and maintainable.

#### Acceptance Criteria

1. WHEN sections are implemented, THE AISEO_Website SHALL use TypeScript React components following existing patterns
2. WHEN sections are created, THE AISEO_Website SHALL utilize existing UI components like FadeIn for animations
3. WHEN sections are styled, THE AISEO_Website SHALL use existing Tailwind classes and brand color variables
4. WHEN the Newsletter_Section is implemented, THE AISEO_Website SHALL create a stub implementation for the subscription functionality
5. WHEN sections are added, THE AISEO_Website SHALL require no new external dependencies or complex animations

### Requirement 6: FAQ Section Cleanup

**User Story:** As a website visitor, I want the FAQ section to function properly without broken interactive elements, so that I can access information reliably.

#### Acceptance Criteria

1. WHEN the FAQ_Section is reviewed, THE AISEO_Website SHALL render all Q/A fully visible with no "Mehr" button on the homepage block
2. WHEN the FAQ_Section is cleaned up, THE AISEO_Website SHALL maintain all existing FAQ content and styling
3. WHEN FAQ cleanup is complete, THE AISEO_Website SHALL preserve the existing FAQ schema markup for SEO
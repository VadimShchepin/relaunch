# Requirements Document

## Introduction

Content refinement pass for aiseo.hamburg landing page. This spec addresses redundancy, missing authority signals, and content compression identified in the post-restructure audit. The goal is sharper, leaner content with a clear information hierarchy.

## Glossary

- **Landing_Page**: The primary aiseo.hamburg single-page website
- **Authority_Anchor**: A brief, factual micro-section establishing who Vadim Shchepin is
- **Information_Hierarchy**: Content levels (Level 1: must-read, Level 2: reassurance, Level 3: optional)
- **CTA**: Call-to-action button or form
- **External_Metrics**: Third-party statistics (McKinsey, $750B, conversion rates)

## Requirements

### Requirement 1: Add Authority Anchor Section

**User Story:** As a visitor, I want to quickly understand who is behind this service, so that I can assess credibility without reading a full bio.

#### Acceptance Criteria

1. THE Landing_Page SHALL contain a "Who I am" micro-section of maximum 4 lines
2. THE Authority_Anchor SHALL include: name, role, location, and focus area
3. THE Authority_Anchor SHALL NOT be a narrative "About me" story
4. THE Authority_Anchor SHALL be factual and professional (no marketing language)
5. THE Authority_Anchor SHALL appear near the Differentiation section (where the photo already exists)
6. WHEN the Authority_Anchor is displayed, THE Landing_Page SHALL answer: "Who is this person, and why should I trust him?"

### Requirement 2: Reduce Target Segments

**User Story:** As a visitor, I want fewer, clearer audience categories, so that I can quickly identify if this service is for me.

#### Acceptance Criteria

1. THE Differentiation section SHALL contain maximum 3 target segments (currently 4)
2. WHEN segments are reduced, THE Landing_Page SHALL merge related categories (e.g., combine overlapping professional services)
3. THE remaining segments SHALL be distinct and non-overlapping
4. THE segment descriptions SHALL be concise (maximum 2 lines each)

### Requirement 3: Compress Differentiation Content

**User Story:** As a visitor, I want the agency comparison to be punchy and scannable, so that I understand the difference without reading paragraphs.

#### Acceptance Criteria

1. THE Differentiation section SHALL reduce the agency comparison to maximum 3 contrast points
2. WHEN contrast points are written, THE Landing_Page SHALL use short, direct statements (no explanations)
3. THE Differentiation section SHALL NOT exceed 60% of its current visual height
4. THE agency comparison cards SHALL use tighter padding and spacing

### Requirement 4: Consolidate CTAs

**User Story:** As a visitor, I want clear, non-repetitive calls to action, so that I'm not overwhelmed by multiple identical buttons.

#### Acceptance Criteria

1. THE Landing_Page SHALL contain maximum 3 CTAs total (Hero, Offer form, Final CTA)
2. THE Landing_Page SHALL NOT have a CTA in the Proof section
3. WHEN CTAs appear, THE Landing_Page SHALL use consistent button text ("Check anfordern" or equivalent)
4. THE Landing_Page SHALL NOT use variations like "Jetzt anfragen", "Kostenloser Check", "Check anfordern" for the same action

### Requirement 5: Trim FAQ Content

**User Story:** As a visitor, I want a short FAQ that answers only essential questions, so that I can skim it quickly.

#### Acceptance Criteria

1. THE FAQ section SHALL contain maximum 5 questions (currently 5, verify no expansion)
2. THE FAQ answers SHALL be maximum 2 sentences each
3. THE FAQ section SHALL NOT contain questions that are answered elsewhere on the page
4. THE FAQ section SHALL maintain schema.org FAQPage markup

### Requirement 6: Preserve Hero Section Content

**User Story:** As a visitor, I want to see market context alongside visual proof, so that I understand both the opportunity and the evidence.

#### Acceptance Criteria

1. THE Hero section SHALL retain the external statistics card ($750B, McKinsey, Amsive)
2. THE Hero section SHALL retain the video proof cards (ChatGPT, Gemini demos)
3. THE Hero section SHALL retain the "Zitate/Quellen" proof card
4. THE Hero section content SHALL remain unchanged from current implementation

### Requirement 7: Establish Information Hierarchy

**User Story:** As a content strategist, I want clear content levels, so that visitors know what to read vs. skim.

#### Acceptance Criteria

1. THE Landing_Page SHALL distinguish Level 1 content (Hero, Reality, Differentiation, Offer) as must-read
2. THE Landing_Page SHALL distinguish Level 2 content (Proof, Objections) as reassurance
3. THE Landing_Page SHALL distinguish Level 3 content (FAQ, Footer) as optional/reference
4. WHEN visual styling is applied, THE Landing_Page SHALL use prominence cues (size, contrast) to reflect hierarchy

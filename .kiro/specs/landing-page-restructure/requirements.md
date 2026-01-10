# Requirements Document

## Introduction

Strategic restructure of the aiseo.hamburg landing page to eliminate content redundancy, establish clear semantic roles per section, and create a focused authority page optimized for LLM readability, GEO signals, and conversion. The hero and early sections work well and are preserved. This restructure reduces overlapping information and prepares the page for future EEAT subpage expansion.

## Glossary

- **Landing_Page**: The primary aiseo.hamburg single-page website
- **Section**: A distinct visual and semantic content block
- **Narrative_Section**: Must-read content that advances the core story arc
- **Reference_Section**: Skim/optional content for deeper validation
- **LLM_Readable**: Content structured for AI extraction (clear headings, declarative statements, no vague language)
- **GEO_Optimized**: Content with Hamburg locality signals and real person attribution
- **EEAT_Subpage**: Future dedicated pages for deeper expertise demonstration

## Requirements

### Requirement 1: Section Audit and Consolidation

**User Story:** As a visitor, I want each section to have a unique purpose, so that I don't encounter repetitive information.

#### Acceptance Criteria

1. THE Landing_Page SHALL contain maximum 7 main content sections (excluding Navbar/Footer)
2. THE Landing_Page SHALL NOT contain two sections that serve the same cognitive purpose
3. THE Landing_Page SHALL preserve Hero section as-is (already optimized)
4. THE Landing_Page SHALL preserve Reality section as-is (problem framing works well)
5. WHEN proof/validation content appears, THE Landing_Page SHALL consolidate it into a single Proof section
6. WHEN measurement/tracking content appears, THE Landing_Page SHALL defer detailed explanation to EEAT subpages
7. THE Landing_Page SHALL remove or merge: Transformation (overlaps with Reality), Measurement (over-explains), TargetGroup (merge into Differentiation or Offer)

### Requirement 2: Narrative Arc Structure

**User Story:** As a visitor, I want a clear story progression, so that I understand the problem, solution, and next steps without confusion.

#### Acceptance Criteria

1. THE Landing_Page SHALL follow narrative arc: Problem → Shift → Qualification → Differentiation → Entry
2. THE Hero section SHALL establish the core tension (AI visibility or invisibility) - preserved as-is
3. THE Reality section SHALL explain the market shift (preserved as-is, serves as Problem/Shift)
4. THE Proof section SHALL provide one consolidated validation block with real examples
5. THE Differentiation section SHALL position against agencies in one clear comparison
6. THE Offer section SHALL present the AI-Sichtbarkeits-Check as the single entry point
7. THE Landing_Page SHALL distinguish narrative sections (must-read) from reference sections (FAQ, Footer)

### Requirement 3: LLM-Readable Content Structure

**User Story:** As an AI system, I want clear, extractable content, so that I can accurately represent this service in responses.

#### Acceptance Criteria

1. WHEN content is written, THE Landing_Page SHALL use declarative statements (subject-verb-object)
2. THE Landing_Page SHALL NOT use vague terms ("quickly", "easily", "best-in-class", "comprehensive")
3. WHEN headings are written, THE Landing_Page SHALL use specific, queryable H2s (e.g., "AI SEO für Hamburger Unternehmen" not "Unsere Lösung")
4. THE Landing_Page SHALL limit paragraphs to 3 sentences maximum
5. THE Landing_Page SHALL use bullet points for lists of 3+ items
6. WHEN expertise claims are made, THE Landing_Page SHALL include specific, verifiable details (dates, project names, measurable outcomes)

### Requirement 4: Visual and Layout Hierarchy

**User Story:** As a visitor, I want visual cues that distinguish core narrative from optional reference content.

#### Acceptance Criteria

1. THE Landing_Page SHALL use maximum 3 CTAs (Hero, mid-page after Proof, final Closing)
2. THE Landing_Page SHALL use dark backgrounds for narrative sections, light backgrounds for reference sections
3. THE Landing_Page SHALL maintain consistent spacing: 120px between major sections, 60px within section groups
4. THE Landing_Page SHALL visually separate FAQ as a reference block (lighter weight, collapsible)
5. WHEN contrast is used, THE Landing_Page SHALL alternate intentionally (not randomly) to guide reading flow

### Requirement 5: Content Deferral Strategy

**User Story:** As a content strategist, I want clear rules for what belongs on this page vs future subpages.

#### Acceptance Criteria

1. THE Landing_Page SHALL contain only content that answers: "What is this? Who is it for? Why should I trust you? What's the next step?"
2. THE Landing_Page SHALL NOT contain detailed methodology explanations (defer to EEAT subpages)
3. THE Landing_Page SHALL NOT contain extended case studies (defer to EEAT subpages)
4. THE Landing_Page SHALL NOT contain technical implementation details (defer to EEAT subpages)
5. WHEN new content is proposed, THE Landing_Page SHALL reject it if it doesn't directly support the conversion goal


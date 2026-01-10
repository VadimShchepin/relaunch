# Design Document: Landing Page Restructure

## Overview

Strategic restructure of aiseo.hamburg to eliminate redundancy, establish clear semantic roles, and create a focused authority page. The current 14-section page reduces to 7 sections with distinct purposes.

## 1. Section Audit

| Section             | Decision                | Reason                                         |
| ------------------- | ----------------------- | ---------------------------------------------- |
| **Navbar**          | KEEP                    | Navigation, unchanged                          |
| **Hero**            | KEEP                    | Core tension established, works well           |
| **Reality**         | KEEP                    | Problem/shift framing, visually strong         |
| **Proof**           | KEEP                    | Consolidated validation block                  |
| **Transformation**  | REMOVE                  | Overlaps with Reality (both explain the shift) |
| **TargetGroup**     | MERGE → Differentiation | "Who it's for" belongs with positioning        |
| **Differentiation** | REDESIGN                | Absorb TargetGroup, streamline comparison      |
| **Offer**           | KEEP                    | Clear entry point, well-structured             |
| **Measurement**     | MOVE TO SUBPAGE         | Over-explains methodology, defer to EEAT page  |
| **Process**         | MERGE → Offer           | 3 steps can be inline in Offer section         |
| **Objections**      | KEEP                    | Qualification filter, brief                    |
| **FAQ**             | KEEP                    | Reference section, schema-optimized            |
| **Newsletter**      | REMOVE                  | Distracts from primary CTA, defer to footer    |
| **FinalCTA**        | KEEP                    | Closing conversion point                       |
| **Footer**          | KEEP                    | Standard footer                                |

## 2. Final Page Structure (v1)

```
┌─────────────────────────────────────────────┐
│ Navbar                                      │
├─────────────────────────────────────────────┤
│ 1. HERO (Narrative)                         │
│    Core tension: AI visibility or not       │
│    CTA #1: AI-Sichtbarkeits-Check           │
├─────────────────────────────────────────────┤
│ 2. REALITY (Narrative)                      │
│    Market shift explanation                 │
│    No CTA                                   │
├─────────────────────────────────────────────┤
│ 3. PROOF (Narrative)                        │
│    Consolidated validation                  │
│    CTA #2: Check anfordern                  │
├─────────────────────────────────────────────┤
│ 4. DIFFERENTIATION (Narrative)              │
│    Who it's for + agency comparison         │
│    No CTA                                   │
├─────────────────────────────────────────────┤
│ 5. OFFER (Narrative)                        │
│    Entry point + inline process steps       │
│    CTA #3: Check anfordern                  │
├─────────────────────────────────────────────┤
│ 6. OBJECTIONS (Narrative)                   │
│    Qualification filter                     │
│    No CTA                                   │
├─────────────────────────────────────────────┤
│ 7. FAQ (Reference)                          │
│    Schema-optimized Q&A                     │
│    No CTA                                   │
├─────────────────────────────────────────────┤
│ 8. FINAL CTA (Narrative)                    │
│    Closing statement                        │
│    CTA #4: Final conversion                 │
├─────────────────────────────────────────────┤
│ Footer                                      │
│    Newsletter signup moved here             │
└─────────────────────────────────────────────┘
```

### Narrative Arc

1. **Hero** → Tension (you're visible or you're not)
2. **Reality** → Shift (AI changes how decisions happen)
3. **Proof** → Validation (I've done this, here's evidence)
4. **Differentiation** → Qualification (who this is for + why me)
5. **Offer** → Entry (here's how to start)
6. **Objections** → Filter (who should NOT do this)
7. **FAQ** → Reference (common questions)
8. **Final CTA** → Close (last chance to act)

## 3. Content Principles

### Allowed Content

- Declarative statements about the service
- Specific, verifiable claims (dates, project names, outcomes)
- Hamburg locality signals
- Real person attribution (Vadim Shchepin)
- Single-purpose explanations per section

### Removed/Deferred Content

| Content Type                  | Action | Destination              |
| ----------------------------- | ------ | ------------------------ |
| Detailed tracking methodology | Defer  | /messung (EEAT subpage)  |
| Extended case studies         | Defer  | /projekte (EEAT subpage) |
| Newsletter signup             | Move   | Footer only              |
| Transformation visual list    | Remove | Redundant with Reality   |
| Process as standalone section | Merge  | Inline in Offer          |

### LLM-Optimized Writing Rules

1. **Sentence structure**: Subject-verb-object. No passive voice.
2. **Paragraph length**: Maximum 3 sentences.
3. **Headings**: Specific, queryable. "AI SEO für Hamburger KMU" not "Unsere Lösung"
4. **Lists**: Use bullets for 3+ items.
5. **Banned words**: "schnell", "einfach", "umfassend", "beste", "führend", "innovativ"
6. **Claims**: Include specific detail. "Projekt X erscheint in ChatGPT-Antworten (Stand: Januar 2026)" not "Unsere Projekte werden genannt"

## 4. Visual & Layout Guidance

### Spacing System

- **Between major sections**: 120px (py-30 in Tailwind)
- **Within section groups**: 60px (py-15)
- **Between content blocks**: 32px (gap-8)

### Background Strategy

| Section         | Background       | Purpose               |
| --------------- | ---------------- | --------------------- |
| Hero            | Light (brand-bg) | Entry, calm           |
| Reality         | White            | Narrative, readable   |
| Proof           | White with card  | Validation, prominent |
| Differentiation | Dark (#121212)   | Contrast, authority   |
| Offer           | Dark (#121212)   | Conversion focus      |
| Objections      | Light (brand-bg) | Soft filter           |
| FAQ             | Light (brand-bg) | Reference, skimmable  |
| Final CTA       | Dark (#121212)   | Closing emphasis      |

### CTA Placement (Max 4)

1. **Hero**: Primary CTA "AI-Sichtbarkeits-Check anfordern"
2. **Proof**: Secondary CTA after validation "Check anfordern"
3. **Offer**: Primary CTA in form card
4. **Final CTA**: Closing CTA

### Visual Hierarchy Rules

- Narrative sections: Full-width, prominent typography
- Reference sections: Contained width, lighter visual weight
- FAQ: Collapsible accordion, not expanded cards
- No decorative elements that don't serve content

## Architecture

### Components to Modify

1. **page.tsx** - Remove Transformation, Measurement, Newsletter, TargetGroup imports
2. **Differentiation.tsx** - Absorb TargetGroup content (who it's for)
3. **Offer.tsx** - Absorb Process steps inline
4. **FAQ.tsx** - Convert to collapsible accordion
5. **Footer.tsx** - Add newsletter signup

### Components to Remove

- `Transformation.tsx` - Delete file
- `Measurement.tsx` - Delete file (content moves to future subpage)
- `Newsletter.tsx` - Delete file (moves to Footer)
- `TargetGroup.tsx` - Delete file (content moves to Differentiation)
- `Process.tsx` - Delete file (content moves to Offer)

### Final Component Structure

```
app/page.tsx
├── Navbar
├── Hero
├── Reality
├── Proof
├── Differentiation (includes target group)
├── Offer (includes process steps)
├── Objections
├── FAQ (collapsible)
├── FinalCTA
└── Footer (includes newsletter)
```

## Data Models

No data models required. All content is static and embedded in components.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system.*

This is a static content restructure with no dynamic behavior. All requirements are content-presence checks verified through example-based tests.

**No testable properties identified.**

## Error Handling

Static content updates only. No runtime error handling required beyond existing React error boundaries.

## Testing Strategy

### Unit Tests

Since this is a content restructure, testing verifies:

1. Each section component renders without errors
2. Removed components are not imported in page.tsx
3. Merged content appears in target components
4. CTA count does not exceed 4
5. FAQ renders as collapsible accordion

### Example Tests

- Verify page.tsx does not import Transformation, Measurement, Newsletter, TargetGroup, Process
- Verify Differentiation contains target group content
- Verify Offer contains process steps
- Verify Footer contains newsletter signup
- Verify FAQ uses accordion pattern

### No Property-Based Tests

All requirements are static content presence checks.

## Completion Checklist

- [ ] Page has exactly 7 main sections (excluding Navbar/Footer)
- [ ] No two sections serve the same cognitive purpose
- [ ] Hero and Reality preserved unchanged
- [ ] Transformation component removed
- [ ] Measurement component removed (content deferred)
- [ ] TargetGroup merged into Differentiation
- [ ] Process merged into Offer
- [ ] Newsletter moved to Footer
- [ ] Maximum 4 CTAs on page
- [ ] FAQ is collapsible accordion
- [ ] All headings are specific and queryable
- [ ] No vague marketing language remains
- [ ] Dark/light backgrounds alternate intentionally

## Content Deferral Criteria

New content belongs on this page ONLY if it answers:
- What is this service?
- Who is it for?
- Why should I trust you?
- What's the next step?

Defer to EEAT subpages if content:
- Explains detailed methodology
- Contains extended case studies
- Provides technical implementation details
- Requires more than 3 paragraphs to explain

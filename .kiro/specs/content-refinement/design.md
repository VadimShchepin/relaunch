# Design Document: Content Refinement

## Overview

Second-pass refinement of aiseo.hamburg landing page. Adds missing authority anchor, compresses verbose sections, consolidates CTAs, and establishes clear information hierarchy. Hero section remains unchanged.

## Architecture

### Components to Modify

1. **Differentiation.tsx** - Add authority anchor, reduce targets from 4→3, compress comparison
2. **Proof.tsx** - Remove CTA if present
3. **FAQ.tsx** - Verify 5 questions max, trim answer lengths

### No New Components

Authority anchor integrates into existing Differentiation section near the photo.

## Component Changes

### 1. Differentiation.tsx

**Authority Anchor Addition**

Add a compact authority block near the existing photo. Position below the image overlay text.

```tsx
// Authority anchor content (4 lines max)
const AUTHORITY = {
  name: "Vadim Shchepin",
  role: "AI SEO / GEO Berater",
  location: "Hamburg",
  focus: "KI-Sichtbarkeit für Unternehmen. Testet Strategien an eigenen Projekten."
};
```

**Target Segments Reduction**

Reduce from 4 to 3 segments by merging related categories:

| Current                      | New                                                                |
| ---------------------------- | ------------------------------------------------------------------ |
| Spezialisierte Dienstleister | Spezialisierte Dienstleister (Steuerberater, Fachanwälte, Berater) |
| Lokale Anbieter              | Lokale Anbieter (Handwerker, Praxen, Agenturen)                    |
| B2B Unternehmen              | MERGE → into Spezialisierte Dienstleister                          |
| Vertrauens-Branchen          | Vertrauens-Branchen (Finanzen, Gesundheit, Recht)                  |

New TARGETS array:

```tsx
const TARGETS = [
  {
    title: "Spezialisierte Dienstleister",
    desc: "Steuerberater, Fachanwälte, Berater, B2B",
    icon: "meteor-icons:scales"
  },
  {
    title: "Lokale Anbieter",
    desc: "Handwerker, Praxen, Agenturen",
    icon: "meteor-icons:pin"
  },
  {
    title: "Vertrauens-Branchen",
    desc: "Finanzen, Gesundheit, Recht",
    icon: "meteor-icons:users"
  }
];
```

**Agency Comparison Compression**

Keep 3 contrast points (already at 3). Tighten padding:
- Card padding: `p-8` → `p-6`
- Spacing between cards: `space-y-6` → `space-y-4`

### 2. CTA Consolidation

**Current CTAs:**
1. Hero: "KI-Sichtbarkeit prüfen" ✓ Keep
2. Proof: None currently ✓ OK
3. Offer: "Check anfordern" ✓ Keep
4. FinalCTA: Exists ✓ Keep

Total: 3 CTAs - already compliant. Verify no additional CTAs added.

**Text Consistency:**
Standardize to "Check anfordern" or "KI-Sichtbarkeit prüfen" only.

### 3. FAQ Verification

Current state: 5 questions, answers are 1-2 sentences each. Already compliant.

Verify no expansion occurs. Keep schema.org markup.

## Data Models

### Authority Anchor

```typescript
interface AuthorityAnchor {
  name: string;      // "Vadim Shchepin"
  role: string;      // "AI SEO / GEO Berater"
  location: string;  // "Hamburg"
  focus: string;     // Max 1 sentence
}
```

### Target Segment

```typescript
interface TargetSegment {
  title: string;     // Category name
  desc: string;      // Max 2 lines
  icon: string;      // Iconify icon name
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system.*

This is primarily a static content refinement. Most requirements are content-presence checks verified through example-based tests.

**Property 1: FAQ Answer Length**

*For any* FAQ item in the FAQS array, the answer text shall contain at most 2 sentences (counted by sentence-ending punctuation: `.`, `?`, `!`).

**Validates: Requirements 5.2**

## Error Handling

Static content updates only. No runtime error handling required.

## Testing Strategy

### Unit Tests (Examples)

Since this is content refinement, testing verifies:

1. **Authority Anchor Presence**: Differentiation renders authority block with name, role, location, focus
2. **Target Segment Count**: TARGETS array length equals 3
3. **CTA Count**: Page contains exactly 3 CTA buttons
4. **CTA Text Consistency**: All CTAs use approved text values
5. **FAQ Question Count**: FAQS array length equals 5
6. **FAQ Schema Markup**: JSON-LD script contains FAQPage type

### Property-Based Tests

1. **FAQ Answer Sentence Count**: For all FAQ items, answer sentence count ≤ 2

### Test Configuration

- Framework: Jest + React Testing Library (existing setup)
- Property tests: Use fast-check for FAQ validation
- Minimum 100 iterations for property tests

## Visual Changes Summary

| Section         | Change                                                     |
| --------------- | ---------------------------------------------------------- |
| Hero            | No change                                                  |
| Reality         | No change                                                  |
| Proof           | Verify no CTA                                              |
| Differentiation | Add authority anchor, reduce to 3 targets, tighten spacing |
| Offer           | No change                                                  |
| Objections      | No change                                                  |
| FAQ             | Verify constraints                                         |
| FinalCTA        | No change                                                  |
| Footer          | No change                                                  |

## Information Hierarchy (Visual Guidance)

| Level                 | Sections                              | Treatment                         |
| --------------------- | ------------------------------------- | --------------------------------- |
| Level 1 (Must-read)   | Hero, Reality, Differentiation, Offer | Full prominence, dark backgrounds |
| Level 2 (Reassurance) | Proof, Objections                     | Supporting, lighter treatment     |
| Level 3 (Reference)   | FAQ, Footer                           | Skimmable, compact                |

No code changes required for hierarchy - existing styling already reflects this pattern.

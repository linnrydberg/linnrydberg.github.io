# Personal Website — Design System

> This document is the single source of truth for all visual and structural decisions.
> No code should be written without consulting this first.

---

## 1. Philosophy

**Minimal, warm, and readable.**

Inspired by the structural restraint of jrosser.co.uk (single-page, fixed nav, generous whitespace, content-first) combined with the warm pastel palette of getmitra.com — but pulled into a light-mode-first aesthetic with richer, more saturated pastels.

The goal is a site that feels like a well-designed printed document: quiet, confident, and easy to spend time in.

**Guiding principles:**
- Typography does the heavy lifting — not decoration
- Color communicates hierarchy, not identity
- Every element earns its place — default to removing
- No dark/light toggle — single light theme, done well

---

## 2. Color

### Base Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F7F4F0` | Page background — warm off-white, not pure white |
| `--color-surface` | `#EFEBE4` | Cards, code blocks, subtle section dividers |
| `--color-border` | `#DDD8CE` | Borders, dividers, horizontal rules |
| `--color-text-primary` | `#1C1A17` | Body text, headings — near-black with warmth |
| `--color-text-secondary` | `#6B6560` | Captions, meta text, dates, labels |
| `--color-text-muted` | `#A09890` | Placeholder-level text, footnotes |

### Accent Palette

Four pastel accents, each reserved for a specific section. Rich enough to feel intentional, soft enough to stay out of the way.

| Token | Hex | HSL | Section | Usage |
|---|---|---|---|---|
| `--color-accent-sage` | `#7AAB8C` | 145° 21% 57% | About | Nav indicator, section label, link underlines |
| `--color-accent-rose` | `#C47F7F` | 0° 34% 63% | CV | Nav indicator, section label, tag pills |
| `--color-accent-sand` | `#C4A46B` | 38° 40% 59% | Projects | Nav indicator, section label, hover states |
| `--color-accent-lavender` | `#8B84C2` | 245° 32% 64% | Blog | Nav indicator, section label, link underlines |

### Tint Variants (for backgrounds/hover states)

Each accent has a 12% opacity tint for use on `--color-surface`:
- `--color-accent-sage-tint`: `#7AAB8C1F`
- `--color-accent-rose-tint`: `#C47F7F1F`
- `--color-accent-sand-tint`: `#C4A46B1F`
- `--color-accent-lavender-tint`: `#8B84C21F`

### Usage Rules

- **Never use an accent as a text color** unless it passes 4.5:1 contrast on `--color-bg`
- **One accent per section** — don't mix accents within a section
- **Accents on borders/underlines** are preferred over fills
- Background is always warm, never pure white (`#FFFFFF`) or cool gray

---

## 3. Typography

### Typefaces

| Role | Family | Weights | Source |
|---|---|---|---|
| **Display / Headings** | `Instrument Serif` | 400 (regular + italic) | Google Fonts |
| **Body / UI** | `Inter` | 400, 500, 600 | Google Fonts |
| **Code / Mono** | `JetBrains Mono` | 400, 500 | Google Fonts |

**Rationale:** Instrument Serif brings warmth and character to headings without being loud. Inter is the workhorse — reliable, neutral, highly legible. JetBrains Mono for any CV/technical content.

### Type Scale

All sizes in `rem`. Base: `1rem = 16px`.

| Token | Size | Line Height | Usage |
|---|---|---|---|
| `--text-xs` | `0.75rem` | `1.4` | Labels, tags, footnotes |
| `--text-sm` | `0.875rem` | `1.5` | Meta, dates, captions |
| `--text-base` | `1rem` | `1.7` | Body copy |
| `--text-lg` | `1.125rem` | `1.6` | Lead paragraphs, intro text |
| `--text-xl` | `1.375rem` | `1.4` | Section subheadings (Inter 600) |
| `--text-2xl` | `1.75rem` | `1.2` | Section headings (Instrument Serif) |
| `--text-3xl` | `2.5rem` | `1.1` | Hero name (Instrument Serif, italic) |
| `--text-4xl` | `3.5rem` | `1.0` | (Reserved — use sparingly) |

### Typography Rules

- **Headings**: Instrument Serif, regular weight. Use italic variant for emphasis and the hero name.
- **Body**: Inter 400, `--text-base`, `line-height: 1.7` — never go below 1.6 for paragraphs
- **No font mixing within a single UI component** — headings OR body, not both
- **Letter-spacing**: `-0.01em` on display sizes (≥2xl), `0` on body
- **Max line length**: 65ch for body copy — enforce with `max-width` on text containers
- **Avoid bold** (`font-weight: 700`) in body text — use `500` for emphasis instead

---

## 4. Spacing

All spacing uses a base-4 scale in `rem`.

| Token | Value | px equivalent |
|---|---|---|
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.5rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1rem` | 16px |
| `--space-6` | `1.5rem` | 24px |
| `--space-8` | `2rem` | 32px |
| `--space-12` | `3rem` | 48px |
| `--space-16` | `4rem` | 64px |
| `--space-24` | `6rem` | 96px |
| `--space-32` | `8rem` | 128px |

**Rules:**
- Between paragraphs: `--space-4`
- Between sections: `--space-24` desktop, `--space-16` mobile
- Section internal padding: `--space-16` top/bottom
- Never use arbitrary values — always pick the nearest token

---

## 5. Layout & Grid

### Page Structure

Single scrolling page. No JavaScript routing — all sections live in `index.html`.

```
┌──────────────────────────────────────┐
│  NAV (fixed, top)                    │  height: 56px
├──────────────────────────────────────┤
│  HERO (name + one-liner)             │  ~40vh
├──────────────────────────────────────┤
│  ABOUT                               │
├──────────────────────────────────────┤
│  CV                                  │
├──────────────────────────────────────┤
│  PROJECTS                            │
├──────────────────────────────────────┤
│  BLOG                                │
├──────────────────────────────────────┤
│  FOOTER (minimal)                    │
└──────────────────────────────────────┘
```

### Content Width

| Context | Max Width | Notes |
|---|---|---|
| Page wrapper | `720px` | Centered, all content inside this |
| Full-bleed elements | `100%` | Only used for nav background |
| Text-heavy columns | `65ch` | Applied to paragraph containers |

No multi-column layouts. Single column throughout — this is a reading-first site.

### Responsive Breakpoints

| Name | Min Width | Notes |
|---|---|---|
| `sm` | `480px` | Mobile large |
| `md` | `768px` | Tablet |
| `lg` | `1024px` | Desktop |

Designed mobile-first. At `lg`, nav switches from hamburger to inline.

---

## 6. Navigation

- **Fixed top bar**, `height: 56px`, background: `--color-bg` at 90% opacity with `backdrop-filter: blur(8px)`
- Left: Name (Instrument Serif, `--text-lg`, italic)
- Right: Section links (Inter, `--text-sm`, `500`)
- Active section link gets the section's accent color as a bottom border (`2px solid`)
- No hover backgrounds — only color and underline changes
- On scroll: subtle `box-shadow: 0 1px 0 var(--color-border)` appears

---

## 7. Section Anatomy

Each section follows the same structural pattern:

```
<section>
  <header class="section-header">
    <span class="section-label">01 — About</span>   ← accent color, --text-xs, Inter 600, uppercase, tracked
    <h2 class="section-title">About</h2>             ← --text-2xl, Instrument Serif
  </header>
  <div class="section-body">
    ...content...
  </div>
</section>
```

Section labels use their respective accent color. Section titles are plain `--color-text-primary`.

---

## 8. Component Styles

### Links

- Body links: `--color-text-primary`, underline using `text-decoration` in accent color
- No `color: blue` anywhere on the site
- Hover: accent color on the text itself, underline remains

### Tags / Pills (CV skills, project tech)

- Background: accent tint of the section
- Text: accent color (full opacity)
- Border: `1px solid` accent color at 30% opacity
- Shape: `border-radius: 4px`
- Size: `--text-xs`, `padding: 2px 8px`

### CV Entry

```
[Year Range]    [Role / Degree title]
                [Organisation]
                [Short description — 1–2 lines max]
```

Year range: `--text-sm`, `--color-text-secondary`, monospace (`JetBrains Mono`)
Role title: `--text-base`, Inter 600
Organisation: `--text-sm`, `--color-text-secondary`

### Project Card

Flat — no `box-shadow`. Uses `--color-surface` background and `--color-border` border.
- Title: `--text-xl`, Instrument Serif
- Description: `--text-base`, 2–3 lines max
- Tech tags: sand accent pills
- Link: arrow → style, no button

### Blog Entry (list item, inline posts)

- Date: `--text-sm`, monospace, `--color-text-secondary`
- Title: `--text-lg`, Inter 500
- Excerpt: `--text-sm`, `--color-text-secondary`, 1 line max
- No card treatment — list of rows with a thin `--color-border` divider between items
- **Empty state:** When no posts exist, show a single quiet line: *"Nothing here yet — writing takes time."* in `--color-text-muted`, centered.

### About Section

- Left: headshot (`120px × 120px`, `border-radius: 50%`, `object-fit: cover`)
- Right: bio paragraphs
- On mobile: stacks vertically, photo centered above text
- Photo filename: `assets/photo.jpg`

### CV Section

- Fully rendered on-page (no PDF download link)
- Structured: Education → Professional → Internships → Extracurricular → Skills
- Each group has a group label (same style as section label but smaller, `--color-text-muted`)
- Skills rendered as tag pills grouped by category

---

## 9. Motion

Minimal. Functional only.

- Section entry: `opacity 0 → 1`, `translateY(12px) → 0`, duration `300ms`, easing `ease-out`
- Triggered by `IntersectionObserver` when section enters viewport
- Nav active state transition: `color 150ms ease`
- No parallax, no scroll-triggered animations beyond entry fade

---

## 10. What to Avoid

| Don't | Because |
|---|---|
| Dark mode toggle | Complexity without payoff for a personal site |
| Shadows (`box-shadow`) on cards | Creates visual noise; use borders instead |
| Gradient backgrounds | Conflicts with the warm-neutral base |
| More than one accent color per section | Breaks the section-to-color mapping |
| `font-weight: 700` in body | Too heavy against the warm background |
| Large images in hero | Name + title is the hero; headshot lives in the About section only |
| Sidebar layout | Single column is the constraint, not the limitation |
| Animations longer than 400ms | Feels slow; this is a reading site not a landing page |

---

## 11. File / Code Conventions (for when building begins)

```
personal-website/
├── index.html
├── style/
│   ├── tokens.css       ← all CSS custom properties (colors, type, space)
│   ├── base.css         ← reset, body, typography defaults
│   ├── layout.css       ← nav, page wrapper, section structure
│   ├── components.css   ← tags, cards, cv entries, blog rows
│   └── motion.css       ← all animation/transition rules
└── script/
    └── main.js          ← nav scroll spy + section entry animations only
```

- Plain HTML/CSS/JS — no framework, no build step
- CSS custom properties only — no preprocessor
- Semantic HTML throughout (`<section>`, `<article>`, `<time>`, `<nav>`, `<header>`)
- No utility-class frameworks (no Tailwind) — named components only

---

*Last updated: 2026-03-18*

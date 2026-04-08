# clouding.ai — Reimagined

> A full-stack Next.js 14 reimagination of [clouding.ai](https://clouding.ai), built end-to-end using Claude Code with Plan Mode, custom skills, and MCP integrations.

---

## Project Overview

**clouding.ai** is a Salesforce and Agentforce consultancy headquartered in Dubai, with offices across the MENA region. Their existing site is built on WordPress + Elementor — functional, but technically dated and visually conservative for a company positioning itself at the frontier of AI transformation.

This project is a complete reimagination of that site: same brand identity and content, rebuilt on a modern stack with a premium dark aesthetic, Three.js hero, Framer Motion animations, and a component architecture designed for long-term maintainability.

**Why Claude Code?** The goal was to demonstrate AI-assisted software engineering as a professional workflow — not vibe coding, but structured, plan-first, tool-integrated development. Every implementation step was preceded by a written plan, reviewed before execution, and logged to Notion as research artefacts.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS + custom CSS variables |
| Animation | Framer Motion |
| 3D | React Three Fiber + Drei |
| Fonts | Geist Sans via `next/font/local` |
| Content | Static data in `src/data/` |
| AI Workflow | Claude Code (Sonnet 4.6) |
| Project Docs | Notion via MCP |
| Version Control | GitHub via API |

---

## Workflow

The project followed a strict Plan → Approve → Execute loop throughout. Claude Code's Plan Mode was activated for all non-trivial tasks, requiring explicit approval before any file was written or command run.

### Phase 1 — Research & Setup

1. Ran `/analyze-website https://clouding.ai` — fetched and analysed the live site using the `WebFetch` tool, producing a structured report covering purpose, tech stack, design patterns, key sections, and brand voice.
2. Used the Notion MCP (`notion-update-page`) to log the full analysis to the "Clouding AI Reimagination" Notion page under two structured sections: **Analysis** and **Design Strategy**.
3. Reviewed the design strategy output to define component priorities, color system, and motion approach before writing any code.

### Phase 2 — Component Building

Built six core components in sequence, each preceded by a Plan Mode review:

1. `NavBar` — fixed header, scroll blur, mobile hamburger
2. `HeroSection` — Three.js particle sphere (Fibonacci lattice), split layout, Framer Motion stagger
3. `ServiceCard` — glassmorphism, cyan gradient border on hover
4. `SectionWrapper` — `whileInView` Framer Motion reveal, eyebrow label, cyan underline accent
5. `TeamCard` — gradient initials avatar, tenure badge
6. `CTABanner` — radial glow, email/phone CTAs

All components were wired in `src/app/page.tsx` with real Clouding AI content.

### Phase 3 — Visual Polish

- Replaced solid brand colors with the real Clouding AI palette (`#045089`, `#f96d64`, `#020e20`)
- Added `#00c8e0` cyan as the primary interactive accent
- Introduced multi-layer SVG `WaveDivider` between every section
- Applied glassmorphism (`.glass-card`) via backdrop-filter
- Added SVG fractal noise texture overlay at 2.8% opacity for depth
- Particle sphere rebuilt with Fibonacci lattice distribution for even coverage

### Phase 4 — Pages & Routes

- `/academy` — full Clouding AI Academy reimagination with `AcademyHero` (pulsing rings), mission, objectives, 4 training tracks, enrollment timeline, and success partners
- `/blog/[slug]` — three static blog posts with full article content, related posts, and back navigation
- `loading.tsx` files at root and `/academy` — shared `LoadingScreen` component with counter-rotating rings

### Phase 5 — Infrastructure

- NavBar anchor links fixed to use `/#section` pattern (works from any route)
- `Footer` extracted as a shared component across all pages
- `next.config.mjs` updated with `remotePatterns` for clouding.ai image optimisation
- All TypeScript errors resolved (Framer Motion `Variants` typing, ESLint entity escaping)
- `.claude/commands/` migrated to `.claude/skills/` folder structure

---

## Skills

All skills live in `.claude/skills/<name>/SKILL.md` and are invokable as `/skill-name`.

### `/analyze-website`

Fetches a URL via `WebFetch` and produces a structured analysis report covering purpose, tech stack, design patterns, component patterns, accessibility, performance signals, and inspiration takeaways.

```
/analyze-website https://clouding.ai
```

### `/create-component`

Scaffolds a new TypeScript React component at the correct `src/components/` path with proper typing, Tailwind styling, optional Framer Motion animation, and optional React Three Fiber 3D content.

```
/create-component
> Name: PricingCard
> Description: Glassmorphism pricing tier card with hover glow
> Needs: Framer Motion
```

### `/log-to-notion`

Creates a new page in the project Notion database via the Notion MCP, with a title, body content, optional tags, and a "Logged from Claude Code" attribution note.

```
/log-to-notion
> Title: Sprint Retrospective — April 2025
> Body: ...
> Tags: retrospective, sprint
```

### `/git-push`

Runs `git status` and `git diff --stat`, proposes a conventional commit message, asks for confirmation, then stages, commits, and pushes to origin. Never uses `--no-verify` or force-pushes without explicit instruction.

```
/git-push
```

---

## MCP Integrations

### Notion MCP (`@notionhq/notion-mcp-server`)

Used throughout the project as a persistent research log and decision record.

**What was logged:**

- **Analysis** section — full website analysis of clouding.ai: purpose, tech stack (WordPress + Elementor + Bootstrap), color palette, page sections, brand voice, accessibility gaps
- **Design Strategy** section — derived recommendations: color system mapped to Tailwind CSS vars, component priorities in order, responsive strategy, Three.js hero rationale, differentiation goals vs. the original site

**Target page:** `2f4b7d521ec38064937dc89ddf0e1ecd` ("Clouding AI Reimagination")

```ts
// Configured in .claude/settings.json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "NOTION_API_KEY": "..." }
    }
  }
}
```

### GitHub (API via Node.js)

The `clouding-ai-reimagination` repository did not exist at project start. It was created programmatically via the GitHub REST API using a Node.js one-liner (no `gh` CLI available in the environment), then the remote was added and the initial push made.

Subsequent pushes used standard `git push origin master` after each meaningful feature commit.

---

## Key Prompts

### Phase 1 — Analysis

```
Run /analyze-website on https://clouding.ai
Then log the full analysis to Notion page "Clouding AI Reimagination"
under sections: Analysis, Design Strategy.
Show me what you'll write before executing.
```

### Phase 2 — Component Build

```
Now proceed with building the project based on the design strategy logged to Notion.
Use /create-component for each section in this order:
1. NavBar
2. HeroSection (with Three.js sphere)
3. ServiceCard
4. SectionWrapper
5. TeamCard
6. CTABanner

After building all components, wire them in src/app/page.tsx
Then run /git-push to push to GitHub repo: clouding-ai-reimagination
```

### Phase 3 — Visual Overhaul

```
The current design needs significant visual improvements.
1. HERO SECTION: Replace sphere with AI-themed particle sphere,
   wireframe mesh, glowing cyan particles, right-side layout
2. COLORS: Deep radial gradient background, glassmorphism cards,
   gradient "Impact" text
3. ANIMATIONS: Staggered Framer Motion entrance, whileInView sections
4. OVERALL: More premium dark theme, cyan accent, grid line overlay
```

### Phase 4 — Academy Page

```
Create a new page for the Clouding AI Academy section.
Reference URL: https://clouding.ai/clouding-ai-academy/
Fetch and analyze this page first, then build the reimagination.
Route: src/app/academy/page.tsx
Same design system: navy #050d1a, cyan #00c8e0, Framer Motion, glassmorphism
```

---

## Design Decisions

### Next.js 14 over WordPress

The original site is built on WordPress + Elementor. This stack carries significant overhead: ~3–5 MB of JS/CSS per page, render-blocking fonts via Google Fonts CDN, no native image optimisation, and Elementor's mechanical entrance animations.

Next.js 14 with the App Router gives static site generation for all pages (no server required), `next/image` with automatic format conversion and lazy loading, `next/font` for zero-CLS font delivery, and a component architecture that scales cleanly as the site grows.

### Framer Motion for animations

Elementor's scroll animations are CSS-class-injection-based — they work, but they feel mechanical and are not interruptible. Framer Motion's `whileInView` with `viewport={{ once: true }}` gives smooth, physics-respecting animations that respect `prefers-reduced-motion` and integrate directly with React's render lifecycle. The `staggerChildren` pattern used across `SectionWrapper` and the hero text gives the page the layered, sequential reveal feel common in premium SaaS sites.

### React Three Fiber for the hero

No competitor in the Salesforce consultancy space in MENA has a Three.js hero. The particle sphere — 2,400 points distributed via Fibonacci lattice, layered with a counter-rotating wireframe mesh and a pulsing inner glow core — communicates AI complexity and technical depth without requiring any explanation. It is loaded as a dynamic import with `ssr: false` to keep it out of the static HTML, and the `LoadingScreen` component displays while the Three.js bundle hydrates.

### Color system

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-600` | `#045089` | Primary blue — preserved from original |
| `--accent` | `#f96d64` | Coral red — CTAs, preserved from original |
| `--background` | `#020e20` | Deep navy — dark sections |
| `--surface` | `#071628` | Lighter navy — alternating sections |
| `--cyan` | `#00c8e0` | Interactive accent — new, not in original |

The `--cyan` accent was added to create a distinctly premium, AI-forward feeling not present in the original. It appears on hover states, eyebrow labels, divider accents, particle lighting, and the gradient logo mark.

### Typography

Geist Sans (Vercel's variable font, already in the Next.js scaffold) handles body and UI text. It is loaded via `next/font/local` — zero external requests, zero layout shift. No display font was added because Geist Bold at large weights is sufficiently distinctive for the hero.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with font variables
│   ├── globals.css         # CSS vars, noise texture, utilities
│   ├── loading.tsx         # Root loading UI
│   ├── page.tsx            # Homepage
│   ├── academy/
│   │   ├── loading.tsx
│   │   └── page.tsx        # Academy page
│   └── blog/
│       └── [slug]/
│           └── page.tsx    # Dynamic blog post route (SSG)
├── components/
│   ├── three/
│   │   └── HeroSection.tsx # Three.js particle sphere hero
│   └── ui/
│       ├── NavBar.tsx
│       ├── HeroSection.tsx
│       ├── ServiceCard.tsx
│       ├── SectionWrapper.tsx
│       ├── SectionDivider.tsx
│       ├── WaveDivider.tsx
│       ├── TeamCard.tsx
│       ├── CTABanner.tsx
│       ├── AcademyHero.tsx
│       ├── Footer.tsx
│       └── LoadingScreen.tsx
├── data/
│   └── blog.ts             # Blog post data + helper functions
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

---

## How to Run

### Prerequisites

- Node.js 18+
- A Notion integration with read/write access to the project page

### Environment variables

Create `.env.local` at the project root:

```env
NOTION_API_KEY=ntn_...
NOTION_DATABASE_ID=2f4b7d521ec38064937dc89ddf0e1ecd
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_...
```

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Production build (verifies all types and routes)
npm run build

# Start production server
npm start
```

### Routes

| Route | Page |
|-------|------|
| `/` | Homepage — Hero, Services, About, Team, Insights, CTA |
| `/academy` | Clouding AI Academy |
| `/blog/picture-superiority-effect` | Blog post |
| `/blog/deterministic-ux-to-cognitive-cx` | Blog post |
| `/blog/merq-cloudingai-merger` | Blog post |

---

## Notion Integration (CLAUDE.md context)

- **Integration name:** clouding ai reimagination
- **Target page ID:** `2f4b7d521ec38064937dc89ddf0e1ecd`
- **Database ID:** `837e87d90cf045798b3b56f42acd171b`
- **Permissions:** read, insert, update

---

*Built with [Claude Code](https://claude.ai/code) — Anthropic's AI-assisted engineering CLI.*

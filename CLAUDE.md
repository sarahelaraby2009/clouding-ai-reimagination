# CLAUDE.md — AI-Assisted Development Workflow

This file documents how Claude Code was used to build this project from scratch.
It serves as a reference for the workflow, tooling decisions, and prompts used at each phase.

---

## Project Overview

**What it is:** A reimagination of the [clouding.ai](https://clouding.ai) website — a Salesforce/Agentforce-focused company operating in the MENA region. The goal is to rebuild their web presence using modern frontend technologies, demonstrating what the site could look like with current tooling and design sensibilities.

**Why it was built with Claude Code:** This is a career demonstration assignment. The entire project — from scaffolding to analysis to component building to deployment — is driven through Claude Code to showcase AI-assisted frontend development as a professional workflow, not just a productivity shortcut.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS with extended theme + CSS custom properties |
| Animation | Framer Motion |
| 3D | React Three Fiber v8 + Drei v9 + Three.js |
| Data / CMS | Notion (via MCP) |
| Linting | ESLint (next/core-web-vitals) |

---

## Workflow

Claude Code was used across four phases. Each phase used a combination of Plan Mode, custom slash commands (skills), and MCP server integrations.

### Phase 1 — Project Setup

**What happened:**
1. Initialized a Next.js 14 project with TypeScript and Tailwind via `create-next-app`
2. Installed all dependencies: `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `three`, `@notionhq/client`
3. Created the folder structure: `src/components/ui/`, `src/components/three/`, `src/lib/`, `src/types/`
4. Configured `.claude/settings.json` with Notion and GitHub MCP servers
5. Authored four custom slash commands in `.claude/commands/`
6. Updated `tailwind.config.ts` with brand color palette, semantic tokens, font families, and keyframe animations
7. Updated `globals.css` with CSS variable definitions for light/dark mode
8. Created `src/lib/notion.ts` (Notion API client) and `src/types/index.ts` (shared types)
9. Created `.env.local` stubs for all required environment variables

**Tools used:** Plan Mode, Write, Edit, Bash

### Phase 2 — Website Analysis & Notion Logging

**What happens:**
1. Run `/analyze-website https://clouding.ai` — Claude fetches the live site and produces a structured design/tech audit
2. Review the output: purpose, tech stack signals, design patterns, component patterns, accessibility, performance, and inspiration takeaways
3. Run `/log-to-notion` — Claude creates a new page in the Notion database with the analysis findings

**Tools used:** `/analyze-website` skill, `/log-to-notion` skill, Notion MCP

### Phase 3 — Component Building

**What happens:**
1. Run `/create-component` for each section of the redesigned site
2. Claude asks for: component name, description, and whether it needs Framer Motion, React Three Fiber, or both
3. Claude writes the complete `.tsx` file to the correct path under `src/components/`
4. Iterate via chat — refine props, adjust animations, update styles

**Tools used:** `/create-component` skill, Edit, Write

### Phase 4 — GitHub Push

**What happens:**
1. Run `/git-push` — Claude runs `git status` and `git diff --stat`, drafts a conventional commit message, asks for confirmation, then stages, commits, and pushes
2. Claude never force-pushes to main without explicit confirmation and never skips git hooks

**Tools used:** `/git-push` skill, Bash, GitHub MCP

---

## Skills (Slash Commands)

Custom commands live in `.claude/commands/` and are invoked with `/command-name` in the Claude Code prompt.

### `/analyze-website`
Fetches a URL with `WebFetch` and produces a structured audit covering purpose, tech stack signals, design patterns, component patterns, accessibility, performance, and actionable inspiration takeaways.

```
/analyze-website https://clouding.ai
```

### `/create-component`
Scaffolds a new React component. Asks for name, description, and animation/3D requirements, then writes a complete TypeScript file with a `Props` interface, Tailwind classes, and optional Framer Motion variants or R3F canvas setup.

```
/create-component
> Name: HeroSection
> Description: Full-viewport hero with animated headline and 3D background
> Needs: Both (Framer Motion + R3F)
```

Output path: `src/components/<Name>.tsx` (or `ui/` / `three/` subfolder as appropriate)

### `/log-to-notion`
Creates a new page in the project Notion database via the Notion MCP. Accepts a title, body content, and optional tags. Reports the created page URL on success.

```
/log-to-notion
> Title: clouding.ai Analysis — April 2026
> Body: <paste analysis output>
> Tags: analysis, design, phase-2
```

### `/git-push`
Runs `git status` + `git diff --stat`, drafts a conventional commit message (`feat/fix/chore/refactor/style/docs/test`), asks for confirmation, then commits and pushes to the current branch. Never uses `--no-verify`.

```
/git-push
```

---

## MCP Integrations

MCP (Model Context Protocol) servers are configured in `.claude/settings.json` and give Claude Code direct tool access to external services — no copy-pasting, no manual API calls.

### Notion MCP (`@notionhq/notion-mcp-server`)

**Used for:**
- Creating analysis log entries during Phase 2
- Logging design decisions, component notes, and status updates throughout the build
- Maintaining a living project log alongside the codebase

**Target database:** `NOTION_DATABASE_ID` (set in `.env.local`)
**Integration name:** "clouding ai reimagination"
**Connected page:** "Clouding AI Reimagination" (Notion page ID: `2f4b7d521ec38064937dc89ddf0e1ecd`)

### GitHub MCP (`@modelcontextprotocol/server-github`)

**Used for:**
- Pushing commits via the `/git-push` skill
- Reading repository state (branch, status) without leaving the Claude Code session

**Auth:** `GITHUB_PERSONAL_ACCESS_TOKEN` (set in `.env.local`)

---

## Prompts Used

### Phase 1 — Project Setup

```
Scaffold a Next.js 14 TypeScript project called "clouding.ai-reimagination".
Install: framer-motion, @react-three/fiber, @react-three/drei, three, @notionhq/client.
Create src/components/ui/, src/components/three/, src/lib/, src/types/.
Set up .claude/settings.json with Notion and GitHub MCP servers.
```

```
Update tailwind.config.ts with a brand palette (indigo/violet), semantic color tokens
(background, foreground, surface, surface-elevated, muted, accent), Geist font families,
and fade-in / slide-up keyframe animations.
```

```
Update globals.css with CSS variable definitions for the brand palette and semantic tokens,
with dark mode via prefers-color-scheme. Add a .canvas-container utility for Three.js canvases.
```

### Phase 2 — Analysis & Notion Logging

```
/analyze-website https://clouding.ai
```

```
/log-to-notion
Title: clouding.ai Site Analysis
Body: <analysis output>
Tags: analysis, phase-2
```

### Phase 3 — Component Building

```
/create-component
Name: HeroSection
Description: Full-viewport hero with animated tagline, CTA buttons, and an abstract 3D particle cloud
Needs: Both
```

```
/create-component
Name: NavBar
Description: Sticky top navigation with logo, links, and a CTA button. Collapses to hamburger on mobile.
Needs: Framer Motion only
```

### Phase 4 — GitHub Push

```
/git-push
```

---

## Design Decisions

### Next.js 14 over WordPress
The original clouding.ai site appears to be WordPress-based. Next.js 14 with the App Router gives full control over rendering strategy (SSG/SSR/ISR per-route), removes the CMS overhead, and enables native TypeScript, Tailwind, and R3F integration without plugin wrangling.

### Framer Motion for animations
Framer Motion's `variants` API makes it straightforward to coordinate staggered entrance animations across component trees — exactly what a marketing site needs for section reveals and hero transitions. It compiles to CSS where possible and falls back to JS-driven animation gracefully.

### React Three Fiber for the hero
A static image hero would not differentiate this redesign from the original. R3F lets the hero section use a live 3D scene (particle cloud, geometric abstract) while staying inside the React component model — no imperative Three.js lifecycle management, no separate canvas coordinator.

### Color and typography
- **Brand palette:** Indigo/violet (`#6366f1` primary) — conveys technology and trust without defaulting to the overused SaaS blue
- **Semantic tokens:** All colors are defined as CSS variables and mapped into Tailwind, so dark mode is a single `@media` block with no class toggling required
- **Typography:** Geist Sans (body) + Geist Mono (code/data) — clean, modern, designed specifically for developer-facing products; loaded locally via `next/font` for zero layout shift

---

## How to Run

### Prerequisites
- Node.js 18+
- A Notion integration with read/insert/update access to your target database
- A GitHub personal access token (if using the `/git-push` MCP path)

### Setup

```bash
npm install
```

Create `.env.local` at the project root:

```env
NOTION_API_KEY=secret_...
NOTION_DATABASE_ID=837e87d90cf045798b3b56f42acd171b
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_...
```

### Run

```bash
npm run dev     # Development server → http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

### Using Claude Code skills

Open the project in Claude Code, then use:

```
/analyze-website <url>
/create-component
/log-to-notion
/git-push
```

# GEMINI.md - Project Context

## Project Overview
**Tategaki (縱書)** is a Next.js demonstration project focused on traditional Chinese vertical text layout. It implements authentic top-to-bottom, right-to-left reading flow using modern web standards.

- **Primary Goal**: Showcase CSS `writing-mode: vertical-rl` and typographic nuances of vertical typesetting.
- **Main Feature**: Displays Wang Xizhi's "Preface to the Poems Composed at the Orchid Pavilion" (蘭亭集序).
- **Core Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.
- **Typography**: Uses `Noto Serif TC` (Traditional Chinese) for serif typography and `text-justify: inter-ideograph`.

## Building and Running
The project uses **Bun** as the primary package manager (indicated by `bun.lock`).

- **Development**: `bun dev` (Starts Next.js dev server on port 3000)
- **Build**: `bun run build` (Production build)
- **Start**: `bun start` (Run production build)
- **Linting**: `bun run lint` (Executes `biome check`)
- **Formatting**: `bun run format` (Executes `biome format --write`)

## Development Conventions
- **Code Style**: Managed by **Biome**. Follow rules defined in `biome.json`. 
- **Styling**: Tailwind CSS v4 is used with CSS variables for the color palette (`background`, `ink`, `seal`).
- **Vertical Layout**:
  - `writing-mode: vertical-rl` is applied at the `html` level in `globals.css`.
  - `text-orientation: mixed` ensures alphanumeric characters are oriented correctly alongside CJK characters.
  - Horizontal scrolling is enabled on the `html` element while vertical scrolling is disabled.
- **File Structure**:
  - `src/app/`: Next.js App Router (standard layout and page structure).
  - `public/`: Static assets (SVG logos).
  - `biome.json`: Biome configuration for formatting and linting.
  - `postcss.config.mjs`: PostCSS configuration for Tailwind CSS.

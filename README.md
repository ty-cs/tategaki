# Tategaki (縱書) - Vertical Writing Demo

A Next.js demonstration of traditional Chinese vertical text layout using CSS `writing-mode: vertical-rl`.

## Overview

This project showcases the implementation of vertical typesetting (tategaki / zongshu) on the web, featuring Wang Xizhi's famous "Preface to the Poems Composed at the Orchid Pavilion" (蘭亭集序). It explores the typographic nuances of vertical text flow, including mixed text orientation and inter-ideographic justification.

## Features

- **Vertical Layout**: Utilizes CSS `writing-mode: vertical-rl` for authentic top-to-bottom, right-to-left reading flow.
- **Typography**: 
  - Uses `Noto Serif TC` via `next/font` for beautiful Traditional Chinese serif typography.
  - Implements `text-justify: inter-ideograph` for balanced character spacing.
  - Features mixed text orientation for alphanumeric characters alongside Chinese characters.
- **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS v4.
- **Design**: Clean, minimalist aesthetic focusing on the text, with responsive horizontal scrolling.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Font**: [Noto Serif TC](https://fonts.google.com/specimen/Noto+Serif+TC) (Google Fonts)
- **Tooling**: [Biome](https://biomejs.dev/) for linting and formatting.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tategaki
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** with your browser to see the result.

## Development

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`

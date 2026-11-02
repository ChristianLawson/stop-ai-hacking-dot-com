# Project Guidance

## User Preferences

- Keep the initial site small and easy to replace with a fuller website later.

## Accepted Requirements

- The site is StopAIHacking.com: a static page for the Small Business Security book in five languages (English, Spanish, Simplified Chinese, Bengali, Arabic).

## Verified Commands

- **typecheck**: `Frontend: pnpm typecheck; backend: mops check --fix`
- **fix**: `Frontend: pnpm fix; backend: mops check --fix`
- **build**: `Frontend: pnpm build; backend: mops build; root: pnpm bindgen`

## Learnings

- The whole page lives as static HTML, CSS, and an inline script in src/frontend/index.html so every word is readable without JavaScript. App.tsx renders nothing.
- The brand spelling is StopAIHacking.com. Covers are in src/frontend/public/covers. Never use em dashes or en dashes in page text.

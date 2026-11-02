# Project Guidance

## User Preferences

- Keep the initial site small and easy to replace with a fuller website later.

## Accepted Requirements

- Build something tiny for StioAIhacking.com as the starting point.

## Verified Commands

- **typecheck**: `Frontend: pnpm typecheck; backend: mops check --fix`
- **fix**: `Frontend: pnpm fix; backend: mops check --fix`
- **build**: `Frontend: pnpm build; backend: mops build; root: pnpm bindgen`

## Learnings

- The starter is a static single-page view in src/frontend/src/App.tsx; its only interactive element is the attribution link.
- Keep the exact brand spelling StioAIhacking.com and preserve social metadata in src/frontend/index.html.

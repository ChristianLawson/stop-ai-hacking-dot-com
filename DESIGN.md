# Design Brief

## Direction

Signal in Progress — a tiny editorial holding page for StioAIhacking.com, honest about its temporary state.

## Tone

Swiss-poster minimalism: composed, optimistic, and deliberately unfinished rather than a generic tech launch page.

## Differentiation

Oversized ink typography meets one acid-chartreuse signal mark and a tactile abstract circuitry artwork.

## Color Palette

| Token | OKLCH (light) | Role |
| --- | --- | --- |
| background | 0.985 0.004 255 | Cool paper canvas |
| foreground | 0.16 0.022 255 | Blue-black editorial ink |
| card | 1 0 0 | Crisp header and artwork frame |
| primary | 0.23 0.029 255 | Dark decisive action ink |
| accent | 0.82 0.185 123 | Chartreuse signal detail |
| muted | 0.945 0.009 255 | Supporting-section tint |

## Typography

- Display: Space Grotesk — hero and wordmark, tight tracked, confident but not futuristic.
- Body: Satoshi — concise description, supporting copy, and micro-labels.
- Scale: hero `text-5xl md:text-7xl tracking-tight`, h2 `text-2xl md:text-3xl`, label `text-xs uppercase tracking-[0.18em]`, body `text-base md:text-lg`.

## Elevation & Depth

Flat gallery-like surfaces and fine borders replace floating cards; the image provides the visual depth.

## Structural Zones

| Zone | Background | Border | Notes |
| --- | --- | --- | --- |
| Header | `bg-card` | `border-b border-border` | Compact wordmark and a restrained status label, no navigation. |
| Content | `bg-background`; supporting strip `bg-muted/40` | Fine horizontal section dividers | Split editorial hero with a single relevant image, then one short supporting statement. |
| Footer | `bg-muted/40` | `border-t border-border` | Quiet brand sign-off and work-in-progress note. |

## Spacing & Rhythm

Use a max-width 1200px grid, 24px mobile gutters, 40px desktop gutters, and generous 80–120px hero breathing room.

## Component Patterns

- Buttons: No speculative action; if needed later, use square-ish ink primary and chartreuse on hover.
- Cards: One artwork frame, 4px corners, hairline border, no heavy drop shadow.
- Badges: Small uppercase outlined status marker; never imply a launch date.

## Motion

- Entrance: Optional single 400ms opacity-and-rise reveal for hero content.
- Hover: Restrained 300ms transition only on genuine interactive elements.
- Decorative: Static art; honor reduced-motion preference.

## Constraints

- Keep the entire page small and easy to replace; no fabricated product claims or fake calls to action.
- Use semantic OKLCH tokens and bundled local fonts, with readable light/dark contrasts.
- Treat the preview as direction only; ship a separate production image asset for the artwork.

## Signature Detail

A single chartreuse geometry cue connects the temporary status label to the hero's tactile circuitry artwork.

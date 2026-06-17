# GoLiveQA — Monika Chaudhary

Marketing site for a solo QA consultant. **Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui.**

Warm/personal design direction: cream surfaces, terracotta accent, blue primary actions, DM Sans + Kaushan Script.

## Setup

```bash
# 1. Drop these files into a folder (or merge into an existing Next.js 14 app)
npm install
npm run dev          # http://localhost:3000
```

If you're starting fresh and want the full Next.js scaffold (`.gitignore`, `next-env.d.ts`, etc.):

```bash
npx create-next-app@14 goliveqa --typescript --tailwind --app --eslint
# then copy the /app, /components, /lib folders and the config files over the generated ones
```

## Add your photo

The About section loads `/monika.jpg`. Put your headshot at:

```
public/monika.jpg
```

It's rendered with `object-contain` (the whole image shows, never cropped). For a fill-the-frame look instead, change `object-contain` → `object-cover` in `components/about.tsx`.

## Project structure

```
app/
  layout.tsx          # fonts (DM Sans + Kaushan Script), metadata
  page.tsx            # composes all sections
  globals.css         # Tailwind directives + base resets
components/
  navbar.tsx          # sticky header
  hero.tsx            # name + tagline + CTA
  tools.tsx           # "Tools we work with" strip
  about.tsx           # bio, signature, photo, stat cards
  companies.tsx       # logos / names worked with
  services.tsx        # 6 service cards
  process.tsx         # 4-step timeline
  pricing.tsx         # "Let's Talk About Your Product" CTA card
  contact.tsx         # contact details + form (client component)
  footer.tsx
  icons.tsx           # inline LinkedIn glyph
  ui/
    button.tsx        # shadcn/ui Button
    card.tsx          # shadcn/ui Card
lib/
  utils.ts            # cn() helper
tailwind.config.ts    # design tokens (colors, fonts, shadows)
```

## Design tokens (tailwind.config.ts)

| Token | Value | Use |
|---|---|---|
| `brand` / `brand-dark` | `#145fdd` / `#0d46b8` | Buttons, links |
| `accent` / `accent-soft` | `#c2613f` / `#f6ebe5` | Eyebrows, badges, signature |
| `surface` / `surface-soft` | `#faf7f2` / `#f4ede2` | Page + alternating sections |
| `hairline` | `#ece4d7` | Borders |
| `ink` / `body` / `muted` / `faint` | `#111827` / `#4b5563` / `#6b7280` / `#9ca3af` | Text |

To recolor the whole site, edit those values in `tailwind.config.ts`.

## Notes

- The contact form is non-functional (prevents default submit). Wire it to your email service / API route (e.g. Resend, Formspree, a Next.js route handler).
- shadcn/ui `Button` and `Card` are included directly (no CLI needed). Add more shadcn components with `npx shadcn@latest add <name>` if you extend the site.
- All copy is preserved verbatim from the original site.

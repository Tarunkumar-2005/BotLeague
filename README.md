# ⚡ BotLeague — India's Ultimate Robotics Arena

> India's national robotics arena platform. Build your team, compete across the country, and rise to the top of the national leaderboard.

A **frontend-only** landing page built with **React + TypeScript + Tailwind CSS**, powered by **Vite**.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🗂️ Project Structure

```
botleague/
├── public/
│   └── images/                        # AI-generated & static images
│       ├── hero_arena.png             # Hero section background
│       ├── robo_race.png
│       ├── line_follower.png
│       ├── rc_racing.png
│       ├── robo_war.png
│       └── robo_hockey.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Fixed navbar, mobile hamburger, backdrop blur
│   │   ├── Hero.tsx                   # Full-screen hero with image, live badge, stats
│   │   ├── CompetitionsEvents.tsx     # Live bracket, upcoming events, past results
│   │   ├── UserJourney.tsx            # 4-step path to the league
│   │   ├── WhatIsBotLeague.tsx        # Features + animated digital ID card
│   │   ├── Categories.tsx             # Mini Makers / Junior / Young Engineers / Robo Minds
│   │   ├── CompetitionDisciplines.tsx # 6 disciplines with photos and hover effects
│   │   ├── WhyRegister.tsx            # League advantages + national leaderboard
│   │   ├── JoinEcosystem.tsx          # 3 role-based signup forms (client-side only)
│   │   ├── Sponsors.tsx               # Partner logos + scrolling marquee ticker
│   │   ├── Footer.tsx                 # 4-column footer with newsletter form
│   │   └── icons.tsx                  # Custom SVG icon set (no external icon package)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                      # Tailwind directives + custom animations
│
├── tailwind.config.js                 # Custom colors, fonts
├── index.html                         # Google Fonts (Rajdhani, Barlow)
├── vite.config.ts
└── tsconfig.json
```

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| `ink` | `#0a0a0c` | Page background |
| `panel` | `#141417` | Section backgrounds |
| `panel2` | `#1b1b20` | Card backgrounds |
| `line` | `#2a2a30` | Borders, dividers |
| `brand-red` | `#ef3340` | Primary accent, CTAs |
| `brand-blue` | `#2b4bf2` | Journey step rings |
| `brand-gold` | `#f2b705` | Leaderboard #1, Mini Makers |

> Adjust in [`tailwind.config.js`](./tailwind.config.js) under `theme.extend.colors`.

### Typography
| Font | Weight | Role |
|---|---|---|
| **Rajdhani** | 500–700 | Display headings, labels (`font-display`) |
| **Barlow Semi Condensed** | 600–700 | Display fallback |
| **Barlow** | 400–700 | Body text (`font-body`) |

---

## 📐 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Fixed, glassmorphism blur, animated hover underlines, mobile menu |
| 2 | **Hero** | Full-screen arena image, live episode badge, stats (200+ teams, 12 cities, ₹5L+ prize pool) |
| 3 | **Competitions & Events** | Live tournament bracket, upcoming events with registration, past results |
| 4 | **User Journey** | 4-step path from team registration to joining the elite league |
| 5 | **What is BotLeague?** | 4 core pillars + animated digital identity card |
| 6 | **Categories** | Age-group divisions: Mini Makers (6–10), Junior Innovators (11–14), Young Engineers (15–18), Robo Minds (18+) |
| 7 | **Competition Disciplines** | Robo Race, Line Follower, RC Racing, FPV Drone, Robo Hockey, Robo War — all with real images |
| 8 | **Why Register?** | League advantages + national leaderboard with gold #1 spotlight |
| 9 | **Join the Ecosystem** | Sign-up forms for Judges, Volunteers, and Community Members |
| 10 | **Sponsors** | Partner logos + auto-scrolling marquee ticker |
| 11 | **Footer** | Quick links, disciplines, newsletter subscription, legal bar |

---

## ⚙️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 18.x | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Utility-first styling |
| [Vite](https://vitejs.dev) | 5.x | Dev server & bundler |
| [PostCSS](https://postcss.org) + Autoprefixer | — | CSS processing |

---

## 📝 Notes

- **Forms are client-side only** — the "Join the Ecosystem" forms confirm locally in the UI; no data is sent to any backend.
- **Images** — Hero and discipline images are AI-generated assets stored in `public/images/`. Category photos are sourced from Unsplash CDN.
- **Animations** — The marquee ticker and all transitions respect `prefers-reduced-motion`.
- **Responsive** — All sections stack gracefully to single-column on mobile with a collapsible hamburger menu.
- **Accessibility** — Visible `focus-visible` rings on all interactive elements using the gold accent color.

---

## 📄 License

This project is for demonstration purposes. All content, names, and branding are fictional placeholders.

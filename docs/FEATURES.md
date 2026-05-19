# Features

## Frontend

- **Hero** — name, animated role titles, social links, scroll indicator
- **About** — bio, current focus areas, quick stats
- **Skills** — categorised skill bars (Frontend, Backend, Languages, Tools, Concepts)
- **Projects** — filterable project cards with detail modal
- **Journey** — vertical timeline of milestones since 2025
- **Experience** — hackathon participation and self-directed work
- **Coding Profiles** — GitHub and LeetCode profile cards
- **GitHub Stats** — readme-stats embed (contributions, streak)
- **LeetCode Stats** — leetcard embed (problem counts, heatmap)
- **Certifications** — earned credentials and future goals
- **Blog** — placeholder (no posts yet, ready for content)
- **Contact** — form with Flask backend, fallback to email client
- **CTA** — bottom call-to-action with email and GitHub links
- **404** — clean not-found page

## UI / UX

- Dark theme only
- Responsive — mobile, tablet, desktop
- Smooth scroll
- Framer Motion page and element animations
- FadeIn, SlideUp, StaggerContainer animation wrappers
- GlowCard — cursor spotlight effect on hover
- Animated typewriter role text
- Sidebar section dot navigation (desktop)
- Mobile slide-in menu
- Navbar hides on scroll down, shows on scroll up
- Toast notifications for form feedback
- Lazy-loaded pages with Suspense

## Backend

- `POST /api/contact/` — saves message to DB, sends email notification
- `GET /api/github/profile` — fetches GitHub profile with in-memory cache
- `GET /api/github/repos` — fetches repos with cache
- `GET /api/leetcode/stats` — fetches LeetCode stats with cache
- `GET /api/projects/` — returns static project list
- `GET /api/analytics/counts` — page view counts
- `POST /api/analytics/track` — records a page view

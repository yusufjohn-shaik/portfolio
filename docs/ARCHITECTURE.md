# Architecture

## Overview

```
Browser
  └── React SPA (Vercel)
        ├── Static data  →  src/data/*.js
        └── API calls    →  Flask backend (Render)
                              ├── SQLite / PostgreSQL
                              └── External APIs (GitHub, LeetCode, Gmail)
```

---

## Frontend Structure

```
src/
├── assets/          Static images and tech icons
├── components/
│   ├── animations/  FadeIn, SlideUp, StaggerContainer
│   ├── cards/       ProjectCard, SkillCard, BlogCard, StatCard, ExperienceCard
│   ├── layout/      Navbar, Footer, Sidebar, MobileMenu
│   ├── sections/    One component per page section
│   └── ui/          Button, Loader, SectionTitle, GlowCard, GradientText, etc.
├── context/         ThemeContext, AppContext
├── data/            Static JS data files (projects, skills, journey, etc.)
├── hooks/           useFetch, useTheme, useScroll, useAnimation
├── pages/           Home, ProjectsPage, BlogPage, NotesPage, ResumePage, NotFound
├── routes/          AppRoutes (React Router v6 with lazy loading)
├── services/        Axios wrappers for each API domain
├── styles/          Tailwind base, animations, scrollbar, globals
└── utils/           constants, animations variants, helpers, seo
```

**Data flow:**  
Static content (projects, skills, journey) lives in `src/data/` and is imported directly — no API call needed.  
Dynamic content (GitHub stats, LeetCode stats, contact) goes through `src/services/` → Flask API.

---

## Backend Structure

```
server/
├── app.py               Flask factory, blueprint registration
├── config.py            All config from environment variables
├── routes/              Blueprint route declarations (thin)
├── controllers/         Request parsing, validation, response building
├── services/            Business logic, external API calls, caching
├── models/              SQLAlchemy models
├── database/db.py       SQLAlchemy init
└── utils/               response helpers, validators, logger, in-memory cache
```

**Request flow:**  
`Route → Controller → Service → (Model or External API) → Response`

---

## Caching

GitHub and LeetCode responses are cached in-memory (`utils/helpers.py`) with a configurable TTL (default 1 hour).  
This avoids hitting GitHub's rate limit on every page load.

---

## State Management

No Redux or Zustand. State is handled with:
- `AppContext` — loading state, mobile menu open/close
- `ThemeContext` — dark/light toggle (dark only currently used)
- Local `useState` in components for UI state (active tab, form values, etc.)

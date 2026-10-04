export const NAV_LINKS = [
  { label: 'Home', href: '#hero', path: '/' },
  { label: 'About', href: '#about', path: '/#about' },
  { label: 'Projects', href: '#projects', path: '/projects' },
  { label: 'Skills', href: '#skills', path: '/#skills' },
  { label: 'Experience', href: '#experience', path: '/#experience' },
  { label: 'Blog', href: '#blogs', path: '/blog' },
  { label: 'Contact', href: '#contact', path: '/#contact' },
]

export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  JOURNEY: 'journey',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  CODING: 'coding',
  BLOGS: 'blogs',
  CERTIFICATIONS: 'certifications',
  CONTACT: 'contact',
}

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const GITHUB_API = 'https://api.github.com'

export const META = {
  title: 'Shaik Yusuf John | Full Stack Developer & CSE Student',
  description:
    'CSE Student and Full Stack Developer specializing in React, Flask, and building real-world applications. Check out my projects and coding profiles.',
  keywords: 'Shaik Yusuf John, full stack developer, react, flask, python, tailwind, portfolio, software engineering',
  author: 'Shaik Yusuf John',
  siteUrl: 'https://yusufjohn-dev.vercel.app',
  ogImage: '/profile.png',
}

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  verySlow: 1.0,
}

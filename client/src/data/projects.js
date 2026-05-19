export const projects = [
  {
    id: 1,
    slug: 'flask-auth-system',
    title: 'Flask Authentication System',
    tagline: 'Secure login and signup system built with Flask',
    description:
      'A backend authentication system with user login, signup, form validation and session management built using Flask and Python.',
    longDescription:
      'This project implements a complete authentication flow with secure password handling, form validation, Flask routing and session management. Built to understand backend fundamentals and authentication patterns.',
    image: '/projects/flask-auth.png',
    tags: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'Backend',
    featured: true,
    githubUrl: 'https://github.com/yusufjohn-shaik',
    liveUrl: null,
    highlights: [
      'User login and signup flow',
      'Form validation',
      'Flask routing and backend logic',
      'Session management',
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['Flask', 'Python'],
    },
    year: 2025,
  },
  {
    id: 2,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'Full stack developer portfolio with React and Flask',
    description:
      'A modern portfolio website built with React, Tailwind CSS and a Flask backend. Features project showcase, coding profiles and a clean dark UI.',
    longDescription:
      'Built to showcase projects, skills and coding profiles. Uses React with Tailwind CSS for the frontend and Flask for backend API handling. Deployed on Vercel with a responsive dark theme.',
    image: '/projects/portfolio-v1.png',
    tags: ['React', 'Tailwind CSS', 'Flask', 'Vite'],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yusufjohn-shaik',
    liveUrl: null,
    highlights: [
      'Responsive dark UI',
      'Project showcase section',
      'Coding profile integration',
      'Flask backend API',
    ],
    techStack: {
      frontend: ['React', 'Tailwind CSS', 'Vite'],
      backend: ['Flask', 'Python'],
    },
    year: 2026,
  },
]

export const projectCategories = ['All', 'Backend', 'Full Stack']

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
export const getProjectsByCategory = cat =>
  cat === 'All' ? projects : projects.filter(p => p.category === cat)

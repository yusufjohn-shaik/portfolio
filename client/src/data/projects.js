export const projects = [
  {
    id: 1,
    slug: 'project-helix',
    title: 'Project Helix — Startup Operating System',
    tagline: 'Database-driven startup ecosystem platform with 9-table 3NF schema',
    description:
      'A centralized startup and venture management platform built with PostgreSQL and Flask. Features 3NF normalization, role-based workflows, and real-time database views.',
    longDescription:
      'Engineered as an enterprise-grade relational database application. Implements a 9-table schema normalized to 3NF (7 strong entities, 2 associative entities, 52 attributes). Resolves many-to-many team allocations, manages funding rounds (Seed, Series A), tracks investor commitments, and enforces transactional constraints.',
    icon: '🧬',
    color: '#00f5ff',
    tags: ['PostgreSQL', 'Python', 'Flask', 'SQL (3NF)', 'psycopg2', 'Jinja2'],
    category: 'Full Stack & Database',
    featured: true,
    githubUrl: 'https://github.com/yusufjohn-shaik/project-Helix',
    liveUrl: null,
    status: 'Completed',
    highlights: [
      '9-table relational database strictly normalized to 3NF',
      'Role-based access for founders, members, and investors',
      'Funding rounds & investment commitment ledger',
      'Real-time SQL database views and indexing optimization',
    ],
    techStack: {
      database: ['PostgreSQL', 'psycopg2', 'Relational 3NF Schema'],
      backend: ['Python', 'Flask'],
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
    },
    year: 2026,
  },
  {
    id: 2,
    slug: 'razorpay-revenue-recovery',
    title: 'Razorpay Revenue Recovery Engine',
    tagline: 'Machine-learning powered payment recovery and automated policy engine',
    description:
      'A predictive ML pipeline and webhook listener designed to reduce churn and automatically recover failed transactions in payment gateways.',
    longDescription:
      'Developed to tackle payment failure drop-offs. Integrates a trained machine learning model (Scikit-Learn/Joblib) with a dynamic policy engine. Listens to payment gateway webhooks, predicts recovery probability, and triggers smart retry policies.',
    icon: '💳',
    color: '#38bdf8',
    tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'Webhooks', 'Joblib'],
    category: 'Machine Learning & Backend',
    featured: true,
    githubUrl: 'https://github.com/yusufjohn-shaik/razorpay-revenue-recovery',
    liveUrl: null,
    status: 'Completed',
    highlights: [
      'Trained predictive ML model for transaction recovery likelihood',
      'Real-time webhook listener and transaction pipeline',
      'Automated retry and policy decision engine',
      'Comprehensive test suites for policy verification',
    ],
    techStack: {
      ml: ['Scikit-Learn', 'Joblib', 'Python'],
      backend: ['Python Webhooks', 'Policy Engine'],
    },
    year: 2026,
  },
  {
    id: 3,
    slug: 'dsa-mastery-hub',
    title: 'DSA Mastery Hub',
    tagline: 'Focus timetable and daily algorithmic task management system',
    description:
      'A web app for tracking daily Data Structures & Algorithms learning, deep work timers, LeetCode problem quick-launching, and scratchpad dry runs.',
    longDescription:
      'Built to enforce a daily 3.5-hour problem-solving protocol. Features study-friendly dark mode UI, integrated deep work timer with sound alerts, LeetCode quick launcher with difficulty badges, dry-run notes scratchpad, and Supabase persistence.',
    icon: '⏱️',
    color: '#f59e0b',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'],
    category: 'Frontend & Tools',
    featured: true,
    githubUrl: 'https://github.com/yusufjohn-shaik/dsa-prep',
    liveUrl: null,
    status: 'In Progress',
    highlights: [
      'Structured daily DSA & CS fundamentals timetable',
      'Built-in deep work timer with audio cues',
      'Curated LeetCode problem quick-launcher',
      'Supabase cloud sync with local storage cache fallback',
    ],
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
      database: ['Supabase'],
    },
    year: 2026,
  },
  {
    id: 4,
    slug: 'flask-auth-system',
    title: 'Flask Authentication Architecture',
    tagline: 'Secure authentication backend with session management and CSRF defense',
    description:
      'A backend authentication system with user registration, secure session management, form validation, and password hashing using Flask and Python.',
    longDescription:
      'A security-focused backend project implementing authentication fundamentals. Features bcrypt password hashing, session lifecycle management, route guarding, and input validation.',
    icon: '🔐',
    color: '#10b981',
    tags: ['Flask', 'Python', 'Bcrypt', 'Session Management', 'SQLAlchemy'],
    category: 'Backend',
    featured: true,
    githubUrl: 'https://github.com/yusufjohn-shaik/flask-login-signup-system',
    liveUrl: null,
    status: 'Completed',
    highlights: [
      'Bcrypt password hashing and secure verification',
      'Session lifecycle and guarded private routes',
      'Form validation and input sanitization',
      'Clean modular Flask application structure',
    ],
    techStack: {
      backend: ['Python', 'Flask', 'Bcrypt'],
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
    },
    year: 2025,
  },
]

export const projectCategories = ['All', 'Full Stack & Database', 'Machine Learning & Backend', 'Frontend & Tools', 'Backend']

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
export const getProjectsByCategory = cat =>
  cat === 'All' ? projects : projects.filter(p => p.category === cat)

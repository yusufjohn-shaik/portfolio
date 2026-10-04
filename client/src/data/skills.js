export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    description: 'Building responsive, accessible, and fast user interfaces.',
    skills: [
      { name: 'React.js', tag: 'Core', color: '#61dafb' },
      { name: 'JavaScript (ES6+)', tag: 'Core', color: '#f7df1e' },
      { name: 'Tailwind CSS', tag: 'Styling', color: '#06b6d4' },
      { name: 'HTML5 & CSS3', tag: 'Foundation', color: '#e34f26' },
      { name: 'Vite', tag: 'Tooling', color: '#bd34fe' },
      { name: 'Framer Motion', tag: 'Animation', color: '#ff0055' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: '⚙️',
    description: 'Server logic, RESTful API design, authentication, and database persistence.',
    skills: [
      { name: 'Python', tag: 'Primary', color: '#3776ab' },
      { name: 'Flask', tag: 'Framework', color: '#ffffff' },
      { name: 'REST APIs', tag: 'Architecture', color: '#00f5ff' },
      { name: 'Authentication & Sessions', tag: 'Security', color: '#a855f7' },
      { name: 'SQL & Database Basics', tag: 'Data', color: '#336791' },
    ],
  },
  {
    id: 'cs',
    label: 'CS & Problem Solving',
    icon: '🧩',
    description: 'Algorithmic problem solving and fundamental computer science principles.',
    skills: [
      { name: 'Data Structures & Algorithms', tag: 'Daily Practice', color: '#f59e0b' },
      { name: 'LeetCode Problem Solving', tag: '50+ Days Streak', color: '#ffa116' },
      { name: 'C Programming', tag: 'Academic', color: '#a8b9cc' },
      { name: 'Time & Space Complexity', tag: 'Analysis', color: '#ec4899' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🛠️',
    description: 'Developer tooling, version control, and cloud deployment pipelines.',
    skills: [
      { name: 'Git & GitHub', tag: 'Version Control', color: '#f05032' },
      { name: 'Linux / Bash', tag: 'OS & CLI', color: '#fcc624' },
      { name: 'VS Code', tag: 'Editor', color: '#007acc' },
      { name: 'Vercel', tag: 'Frontend CI/CD', color: '#ffffff' },
      { name: 'Render', tag: 'Backend Hosting', color: '#46e3b7' },
      { name: 'Postman', tag: 'API Testing', color: '#ff6c37' },
    ],
  },
]

export const getAllSkills = () => skillCategories.flatMap(c => c.skills)

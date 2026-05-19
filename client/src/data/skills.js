export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 85, color: '#e34f26' },
      { name: 'CSS3', level: 80, color: '#1572b6' },
      { name: 'JavaScript', level: 75, color: '#f7df1e' },
      { name: 'React.js', level: 72, color: '#61dafb' },
      { name: 'Tailwind CSS', level: 78, color: '#06b6d4' },
      { name: 'Responsive Design', level: 80, color: '#10b981' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 78, color: '#3776ab' },
      { name: 'Flask', level: 72, color: '#ffffff' },
      { name: 'REST APIs', level: 70, color: '#00f5ff' },
      { name: 'Authentication', level: 68, color: '#a855f7' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 78, color: '#3776ab' },
      { name: 'JavaScript', level: 75, color: '#f7df1e' },
      { name: 'C Programming', level: 65, color: '#a8b9cc' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 75, color: '#f05032' },
      { name: 'GitHub', level: 78, color: '#ffffff' },
      { name: 'VS Code', level: 88, color: '#007acc' },
      { name: 'Vercel', level: 70, color: '#ffffff' },
      { name: 'Render', level: 65, color: '#46e3b7' },
      { name: 'Postman', level: 68, color: '#ff6c37' },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    icon: '🧠',
    skills: [
      { name: 'Data Structures & Algorithms', level: 65, color: '#f59e0b' },
      { name: 'Problem Solving', level: 70, color: '#ec4899' },
      { name: 'API Integration', level: 72, color: '#00f5ff' },
      { name: 'Full Stack Development', level: 68, color: '#a855f7' },
    ],
  },
]

export const getAllSkills = () => skillCategories.flatMap(c => c.skills)

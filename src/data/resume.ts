export const profile = {
  name: 'Yuval Tzemach',
  title: 'Software Engineer',
  location: 'Tel Aviv, Israel',
  phone: '+972 50-713-0073',
  email: 'yuvaltze2004@gmail.com',
  linkedin: 'https://linkedin.com/in/yuval-tzemach',
  resumeFile: `${import.meta.env.BASE_URL}Yuval-Tzemach-Resume.pdf`,
  summary:
    'Software Engineer with 3 years of experience specializing in modern frontend architectures, such as React and TypeScript, backed by robust backend capabilities. Highly skilled in crafting intuitive, high-performance user interfaces and managing complex state, supported by a solid foundation in building RESTful APIs and data services with Node.js, Express, Python, and MongoDB.',
} as const

export const coreStack = [
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Python',
  'REST APIs',
]

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Redux', 'TanStack Query', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Object-Oriented Programming'],
  },
  {
    title: 'AI Tools',
    skills: ['Claude Code', 'Cursor'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'Jira', 'Vite', 'Postman', 'Agile/Scrum', 'Docker'],
  },
]

export type Role = {
  title: string
  period: string
  bullets: string[]
}

export type ExperienceGroup = {
  company: string
  location: string
  period: string
  roles: Role[]
}

export const experience: ExperienceGroup[] = [
  {
    company: '8200 Intelligence Unit',
    location: 'Ramat Hasharon, Israel',
    period: 'Jun 2023 - Aug 2026',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jun 2023 - Aug 2026',
        bullets: [
          'Enhanced application speed and user experience by implementing modern React practices, robust state management, such as Redux and TanStack Query, and streamlined Tailwind CSS assets.',
          'Engineered secure RESTful APIs using Node.js, Express, and Python to streamline data processing and integration with MongoDB databases.',
          'Used AI tools, such as Claude Code and Cursor, to accelerate implementation, then reviewed, tested, and adapted generated code to fit project standards and production requirements.',
          'Managed the full development lifecycle in an Agile, Scrum environment, using Git, Jira, and Postman for version control, sprint tracking, and API testing, consistently driving on-time deployments.',
        ],
      },
      {
        title: 'Project: RF Component Test Automation',
        period: 'React, TypeScript, Python, MongoDB',
        bullets: [
          'Built the React and TypeScript interface for an automated RF test bench whose Python backend drives a spectrum analyzer and signal generator over SCPI, replacing a manual check repeated up to 100 times a day.',
          "Designed the results view rendering the ~8 measurements per component as interactive graphs, backed by a MongoDB history for comparing a component's behavior across past runs by date.",
          'Cut testing from 5-30 minutes of manual work per component to 30 seconds-5 minutes, and gave every technician one uniform standard.',
        ],
      },
      {
        title: 'Course Commander — "Omega" Training Program',
        period: 'Interim Rotation: May 2025 - Oct 2025',
        bullets: [
          'Led and mentored trainees through an intensive professional software course, focusing on development, DevOps, and SRE.',
          'Commanded technical training sessions, providing guidance on coding standards and system architecture.',
        ],
      },
    ],
  },
]

export const education = {
  degree: 'Practical Software Engineering',
  school: 'ORT Hermelin, Netanya, Israel',
  period: 'Graduated May 2023',
}

export const languages = [
  { name: 'Hebrew', level: 'Native' },
  { name: 'English', level: 'Professional Proficiency' },
]

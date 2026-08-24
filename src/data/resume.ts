export const profile = {
  name: 'Yuval Tzemach',
  title: 'Full Stack Developer',
  location: 'Tel Aviv, Israel',
  phone: '+972 50-713-0073',
  email: 'yuvaltze2004@gmail.com',
  linkedin: 'https://linkedin.com/in/yuval-tzemach',
  resumeFile: '/Yuval-Tzemach-Resume.pdf',
  summary:
    'Full Stack Developer with 3 years of experience specializing in modern frontend architectures (React, TypeScript) backed by robust backend capabilities. Highly skilled in crafting intuitive, high-performance user interfaces and managing complex state, supported by a solid foundation in building RESTful APIs and data services with Node.js and MongoDB.',
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
    skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 'Java', 'C#'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Redux', 'TanStack Query', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'OOP'],
  },
  {
    title: 'AI Tools',
    skills: ['Claude Code', 'Cursor AI'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'Jira', 'Vite', 'Postman', 'Agile/Scrum'],
  },
  {
    title: 'Design Tools',
    skills: ['Figma', 'Adobe XD'],
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
    period: 'Jun 2023 – Present',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Jun 2023 – Present',
        bullets: [
          'Enhanced application speed and user experience by implementing modern React practices, robust state management (Redux/TanStack Query), and streamlined Tailwind CSS assets.',
          'Designed and deployed secure REST APIs and microservices using Node.js and Express ensuring highly reliable data flow for complex web applications.',
          'Developed RESTful APIs using Node.js and Express to manage seamless data processing, storage, and retrieval, ensuring secure and reliable communication between MongoDB databases and the React frontend.',
          'Managed the full development lifecycle in an Agile (Scrum) environment, utilizing Jira for sprint tracking and consistently driving on-time deployments.',
          'Translated complex system requirements into intuitive, data-heavy user interfaces that improved operational workflow and user engagement.',
        ],
      },
      {
        title: 'Course Commander — "Omega" Training Program',
        period: 'Interim Rotation: May 2025 – Oct 2025',
        bullets: [
          'Led and mentored a group of trainees through an intensive professional software course, focusing on development, DevOps, automation and SRE.',
          'Commanded technical training sessions, providing guidance on coding standards and system architecture.',
          'Evaluated trainee performance and adjusted curriculum delivery to meet unit-specific professional standards.',
        ],
      },
    ],
  },
]

export const education = {
  degree: 'Computer Science Technician',
  school: 'ORT Hermelin, Netanya, Israel',
  period: 'Graduated May 2023',
}

export const languages = [
  { name: 'Hebrew', level: 'Native' },
  { name: 'English', level: 'Professional Proficiency' },
]

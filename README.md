# Yuval Tzemach — Developer Portfolio

Personal portfolio site for **Yuval Tzemach**, Full Stack Developer.

**Live demo:** https://yuvitzemach.github.io/my-portfolio/

## Sections 🔖

- HERO
- ABOUT
- SKILLS
- EXPERIENCE
- EDUCATION
- CONTACT

## Built With 🛠️

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons) for iconography
- [Prettier](https://prettier.io/) + [oxlint](https://oxc.rs/) for formatting and linting

## Installation

You'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) (v20+) installed.

```bash
node --version
git --version
```

## Getting Started

Clone the repo:

```bash
git clone https://github.com/yuviTzemach/my-portfolio.git
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Other useful scripts:

```bash
npm run build          # type-check + production build
npm run preview         # preview the production build locally
npm run lint             # run oxlint
npm run format          # format the codebase with Prettier
npm run format:check   # check formatting without writing
```

## Deployment — GitHub Pages 🚀

This repo deploys automatically via [GitHub Actions](.github/workflows/deploy.yml) — every push to `main` builds the site and publishes it to GitHub Pages.

To enable it on a fork: go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Editing Content ✏️

All personal content (name, contact info, summary, skills, experience, education) lives in one typed file: [`src/data/resume.ts`](src/data/resume.ts). Update it there — no need to touch component code. Skill icons are mapped separately in [`src/data/skillIcons.ts`](src/data/skillIcons.ts).

## Fonts & Icons 🎨

- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Icons:** [Lucide](https://lucide.dev/icons/), [Simple Icons](https://simpleicons.org/) via react-icons

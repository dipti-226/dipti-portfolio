# Dipti Dake | Developer Portfolio

Personal portfolio of Dipti Dake, a .NET Full-Stack Developer.

**Live site:** https://dipti-portfolio.pages.dev

## What it shows

- **DeskPilot**: a deployed, role-based service desk built with ASP.NET Core 9 Web API, Angular 21, SQL Server (ADO.NET and stored procedures), JWT authentication and GitHub Actions CI/CD.
- **Career Bridge**: a full-stack placement portal with Angular, ASP.NET Core Web API and SQL Server.
- Skills, experience, education, a downloadable resume and a contact form.

## Built with

- Angular 21 (standalone components, signals), TypeScript
- Plain CSS with design tokens, light and dark themes
- Web3Forms for the contact form
- Cloudflare Pages, deployed automatically from this repository

## Run it locally

```bash
npm install
ng serve
```

Then open http://localhost:4200.

## Build for production

```bash
ng build
```

The output is created in `dist/Dipti-portfolio/browser`.

## Project structure

```
src/app/
  data/portfolio.data.ts   all text content (edit content here)
  layout/                  header and footer
  sections/                hero, projects, skills, about, contact
  shared/                  theme toggle, resume viewer, scroll reveal
```

## Contact

- GitHub: https://github.com/dipti-226
- LinkedIn: https://www.linkedin.com/in/dipti-dake
- Email: diptidake777@gmail.com
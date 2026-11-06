// All portfolio content lives here. Edit text in this file only.

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

// One layer in the architecture list (top to bottom)
export interface ArchitectureLayer {
  name: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  date: string;
  stack: string[];
  flow: string[];
  highlights: string[];
  screenshots: Screenshot[];
  liveUrl?: string;
  githubUrl?: string;
  apiDocsUrl?: string;

  // Short text shown on the project card
  summary: string;
  // Optional poster image for the card. If missing, the first screenshot is used.
  poster?: Screenshot;

  // Shown in the "Explore more" pop-up
  problem: string;
  overview: string[];
  role: string[];
  layers: ArchitectureLayer[];
  decisions: string[];
}
export interface Certification {
  title: string;
  period: string;
}
export interface Education {
  degree: string;
  institute: string;
  period: string;
  score: string;
}

export interface Portfolio {
  profile: {
    name: string;
    role: string;
    headline: string;
    status: string;
    summary: string;
    photo: string;
    resumeUrl: string;
    email: string;
  };
  about: string[];
  contact: {
    formAccessKey: string;
  };
  social: SocialLink[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: string[];
}

export const PORTFOLIO: Portfolio = {
  profile: {
    name: 'Dipti Dake',
    role: '.NET Full-Stack Developer',
    headline: '.NET full-stack developer. I build secure, role-based web apps and deploy them.',    status: 'Software Developer at Zest India',
    summary:
      'Software Developer who builds REST APIs with C#, ASP.NET Core Web API, ADO.NET and SQL Server, with Angular front ends. Currently working in an Agile/Scrum team on a live project.',
    photo: 'images/profile.webp',
    resumeUrl: 'Dipti_Dake_Resume.pdf',
    email: 'diptidake777@gmail.com',
  },

   // Written in plain words. Edit any line so it sounds exactly like you.
  // TO ADD (optional): one sentence on why you chose .NET, and one on what you enjoyed most
  // in DeskPilot. They make this section sound even more like you.
  about: [
    'I am a software developer. I build web apps with .NET and Angular, from the database to the screen.',
    'I finished my B.E. in Information Technology in 2025. After that I did the .NET Full Stack Developer certification at My Tech Focus, from December 2025 to May 2026. In April 2026 I built Career Bridge, a placement portal.',
    'Since August 2026 I work at Zest India as a Software Developer. I am part of an Agile team on a live project, and I work on .NET backend APIs.',
    'I built DeskPilot to show what I know in .NET development. I chose a problem that almost every office has: the IT support team gets many requests and does a lot of work by hand. I wanted to reduce that work.',
    'I am also familiar with Python, machine learning, deep learning and statistics.',
  ],
  contact: {
    // Web3Forms access key (safe to be public). Replace after you create it.
    formAccessKey: '627340b4-39ac-4ee3-aca3-873baa84220a',
  },

  social: [
    { label: 'GitHub', url: 'https://github.com/dipti-226' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dipti-dake' },
    { label: 'Email', url: 'mailto:diptidake777@gmail.com' },
  ],

  skills: [
    {
      title: 'Backend',
      items: [
        'C#',
        'ASP.NET Core Web API',
        'REST APIs',
        'ASP.NET Core MVC',
        'ASP.NET MVC',
        '.NET Framework',
        'ADO.NET',
        'Entity Framework Core',
        'LINQ',
      ],
    },
    {
      title: 'Frontend',
      items: ['Angular', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Razor Views'],
    },
    { title: 'Database', items: ['SQL Server', 'Stored Procedures'] },
    {
      title: 'Security',
      items: [
        'JWT Authentication',
        'Role-Based Access Control',
        'Password Hashing',
        'Account Lockout',
        'Rate Limiting',
      ],
    },
    {
      title: 'Testing and Tools',
      items: ['xUnit', 'Unit Testing', 'Postman', 'Swagger', 'Visual Studio', 'Jira', 'GitHub Actions'],
    },
    {
      title: 'Version Control and Deployment',
      items: ['Git', 'GitHub', 'SVN (TortoiseSVN)', 'IIS', 'Web Deploy'],
    },
    {
      title: 'Other',
      items: [
        'C',
        'C++',
        'Azure (basics)',
        'OOP',
        'Data Structures',
        'MVC Architecture',
        'Clean Architecture',
        'Agile/Scrum',
      ],
    },
    {
      title: 'Familiar With',
      items: ['Python', 'Machine Learning', 'Deep Learning', 'Statistics'],
    },
  ],

  experience: [
    {
      role: 'Software Developer',
      company: 'Zest India Pvt Ltd',
      period: 'Aug 2026 - Present',
      points: [
        'Contribute as part of an Agile/Scrum team on a live project, taking part in sprint ceremonies and tracking work items in Jira.',
        'Work with the team on .NET backend APIs, using Git and GitHub for version control.',
      ],
    },
  ],

  projects: [
    {
      id: 'deskpilot',
      title: 'DeskPilot',
      tagline: 'Enterprise Service Desk and Request Management Platform',
      date: 'October 2026',
      stack: ['ASP.NET Core 9 Web API', 'Angular 21', 'C#', 'ADO.NET', 'SQL Server', 'JWT', 'GitHub Actions'],
      flow: ['Angular 21', 'ASP.NET Core 9 Web API', 'ADO.NET + 34 stored procedures', 'SQL Server'],

      // Kept for reference and for your resume. Not shown on the site any more.
      highlights: [
        'Built and deployed a role-based service desk (Admin, Employee, Technician) with an ASP.NET Core 9 Web API, an Angular 21 frontend and SQL Server, using ADO.NET and 34 stored procedures.',
        'Implemented JWT authentication, password hashing, account lockout, per-IP rate limiting, and role-based access enforced in both the API and the database layer.',
        'Designed a request workflow with per-role status transitions stored in the database, a status-history timeline, comments, a technician workload limit with transactional row locking, and technician recommendations by specialization and workload.',
        'Added optional AI assistance (Groq with Gemini as an alternative) for classification, description improvement, request summaries and reply drafts, with daily usage caps and a graceful fallback when AI is off.',
        'Set up CI/CD with GitHub Actions that builds Angular and .NET, then deploys to IIS with Web Deploy on every push to main.',
      ],

      screenshots: [
        {
          src: 'images/projects/deskpilot-dashboard.webp',
          alt: 'DeskPilot admin dashboard with request counts, a status chart, recent requests and a request table',
          caption: 'Admin dashboard: request counts, status overview and searchable table',
        },
        {
          src: 'images/projects/deskpilot-request-details.webp',
          alt: 'DeskPilot request details page showing an AI summary, a status timeline and comments',
          caption: 'Request details: AI summary, status timeline and comments',
        },
        {
          src: 'images/projects/deskpilot-create-request-ai.webp',
          alt: 'DeskPilot create request form showing an AI suggestion for request type and priority',
          caption: 'Create request: AI suggests the request type and priority',
        },
        {
          src: 'images/projects/deskpilot-technician.webp',
          alt: 'DeskPilot technician view listing the requests assigned to the technician',
          caption: 'Technician view: only the requests assigned to that technician',
        },
        {
          src: 'images/projects/deskpilot-users.webp',
          alt: 'DeskPilot user management page listing employees and technicians with activate and deactivate actions',
          caption: 'Admin user management: roles, status and account actions',
        },
        {
          src: 'images/projects/deskpilot-mobile.webp',
          alt: 'DeskPilot dashboard on a phone-sized screen',
          caption: 'Responsive layout on a phone-sized screen',
        },
        {
          src: 'images/projects/deskpilot-ci-cd.webp',
          alt: 'GitHub Actions page showing two successful deployment workflow runs',
          caption: 'GitHub Actions: successful automatic deployments on push to main',
        },
      ],
      liveUrl: 'https://deskpilot.runasp.net/',
      githubUrl: 'https://github.com/dipti-226/Smart-Service-Request-Management',

      summary:
        'A service desk where employees raise IT requests and technicians resolve them, built to reduce the workload of an office IT support team.',

      // TO CONFIRM: the first two sentences describe the problem in general terms.
      // Please check they match what you had in mind, and add anything you want to say about it.
      problem:
        'An office IT support team receives many requests from employees, and each one has to be assigned, followed and answered. DeskPilot keeps every request, its owner, its status and its comments in one place, so the support team has less manual work. I also built it to show my .NET development skills from the database to the screen.',
      overview: [
        'DeskPilot has three roles: Admin, Employee and Technician. An employee creates a request, a technician is assigned to it, and the request moves through statuses.',
        'Each role sees only what it needs. A technician sees only the requests assigned to them, and an admin manages users and sees the dashboard.',
        'Every request has a status-history timeline and comments, so people can follow what happened. The status changes allowed for each role are kept in the database.',
        'A workload limit stops one technician from getting too many requests, and the app recommends technicians by specialization and workload.',
        'AI help is optional. It can suggest the request type and priority, improve a description, summarize a request and draft a reply. It has daily usage limits, and the app keeps working when AI is switched off.',
      ],
      role: [
        'I built DeskPilot alone, from the database to the screens.',
        'Database: SQL Server with 34 stored procedures, called through ADO.NET.',
        'API: ASP.NET Core 9 Web API with JWT login, password hashing, account lockout, rate limiting and role checks.',
        'Frontend: Angular 21 screens for the three roles.',
        'AI features: connected Groq (with Gemini as an alternative) with daily usage caps.',
        'Deployment: GitHub Actions pipeline that builds Angular and .NET and deploys to IIS with Web Deploy.',
      ],
      layers: [
        {
          name: 'Angular 21',
          detail: 'The screens for Admin, Employee and Technician: dashboard, requests, comments and user management.',
        },
        {
          name: 'ASP.NET Core 9 Web API',
          detail: 'Handles JWT login, role checks, rate limiting and the request workflow.',
        },
        {
          name: 'ADO.NET + 34 stored procedures',
          detail: 'Database work is done with stored procedures. Role rules are also enforced here, and technician workload uses transactional row locking.',
        },
        {
          name: 'SQL Server',
          detail: 'Stores requests, per-role status transitions, status history, comments and users.',
        },
      ],
      // TO CONFIRM: add your reasons for choosing ADO.NET with stored procedures (instead of
      // Entity Framework Core), and why the workload limit needs row locking. Also add any
      // technical challenge you solved and how you solved it.
      decisions: [
        'Security is not only in the screens: roles are enforced in the API and again in the database layer.',
        'Allowed status changes for each role are kept in the database.',
        'The technician workload limit is checked with transactional row locking.',
        'AI is optional, with daily usage caps and a fallback when it is switched off.',
        'Every push to main builds and deploys the app to IIS through GitHub Actions.',
      ],
    },
    {
      id: 'career-bridge',
      title: 'Career Bridge',
      tagline: 'Placement Portal',
      date: 'April 2026',
      stack: ['Angular', 'ASP.NET Core Web API', 'C#', 'ADO.NET', 'SQL Server', 'JWT', 'Bootstrap 5'],
      flow: ['Angular', 'ASP.NET Core Web API', 'ADO.NET + 15+ stored procedures', 'SQL Server'],

      // Kept for reference and for your resume. Not shown on the site any more.
      highlights: [
        'Developed a full-stack Placement Portal using Angular, ASP.NET Core Web API, C# and SQL Server, with secure Admin, Teacher and Student role-based access using JWT authentication.',
        'Designed and implemented a normalized SQL Server database with 10+ tables and 15+ stored procedures using ADO.NET to support efficient CRUD operations.',
        'Built RESTful APIs and responsive Angular interfaces for student registration, profile management, placement drives, resume management and application tracking, applying Clean Architecture and the Repository Pattern and testing APIs with Swagger and Postman.',
      ],

      screenshots: [],
      // Add liveUrl, githubUrl, poster and screenshots here when they are available

      summary:
        'A placement portal with separate access for Admin, Teacher and Student, covering registration, placement drives and application tracking.',

      // TO CONFIRM: this problem statement is written from your resume bullets only.
      // Please tell me the real reason you built Career Bridge.
      problem:
        'A placement process involves student profiles, resumes, placement drives and applications. Career Bridge puts these in one portal, with separate access for Admin, Teacher and Student.',
      overview: [
        'Career Bridge is a full-stack Placement Portal with three roles: Admin, Teacher and Student. Access is secured with JWT authentication.',
        'Students can register, manage their profile and resume, and track their applications. Placement drives are managed in the portal.',
      ],
      role: [
        'I built Career Bridge alone, from the database to the screens.',
        'Database: a normalized SQL Server database with 10+ tables and 15+ stored procedures, used through ADO.NET.',
        'API: RESTful ASP.NET Core Web API built with Clean Architecture and the Repository Pattern.',
        'Frontend: responsive Angular screens for registration, profile management, placement drives, resume management and application tracking.',
        'Testing: tested the APIs with Swagger and Postman.',
      ],
      layers: [
        {
          name: 'Angular',
          detail: 'Responsive screens for the three roles, styled with Bootstrap 5.',
        },
        {
          name: 'ASP.NET Core Web API',
          detail: 'RESTful endpoints with JWT authentication and role-based access. Built with Clean Architecture and the Repository Pattern.',
        },
        {
          name: 'ADO.NET + 15+ stored procedures',
          detail: 'Data access for the create, read, update and delete operations.',
        },
        {
          name: 'SQL Server',
          detail: 'A normalized database with 10+ tables.',
        },
      ],
      // TO CONFIRM: add your reasons for the main technical choices, and any challenge you solved.
      decisions: [
        'The API uses Clean Architecture and the Repository Pattern.',
        'Access is role-based (Admin, Teacher, Student) and secured with JWT.',
      ],
    },
  ],

  education: [
    {
      degree: 'B.E. Information Technology',
      institute: "JSPM's Bhivrabai Sawant Institute of Technology & Research, Pune",
      period: '2021 - 2025',
      score: 'CGPA 7.38',
    },
    {
      degree: '12th (HSC)',
      institute: "St. Saviour's High School & Junior College",
      period: '',
      score: '81.83%',
    },
    {
      degree: '10th (SSC)',
      institute: 'Janata Kanya Vidyalaya, Kashti',
      period: '',
      score: '86%',
    },
  ],

  certifications: [
    { title: '.NET Full Stack Developer Certification - My Tech Focus', period: 'Dec 2025 - May 2026' },
  ],
   
  achievements: ['Campus Lead - Algo Zenith Technical Club (2023)'],
};
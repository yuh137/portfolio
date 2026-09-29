/**
 * Single source of truth for all site content.
 * Mirrors knowledge/profile/"Huy Nguyen - Resume.pdf" (30 September 2026). When the resume
 * changes, change this file; nothing else on the site hard-codes these facts.
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  period: string;
  /** Who the work was for, labelled as on the resume ("Employer: …" or "Client: …"). */
  employer: string;
  creditLabel?: "Employer" | "Client" | "Client & Employer";
  role?: string;
  description: string;
  responsibilities: string[];
  outcome?: string;
  technologies: string[];
  links: ProjectLink[];
  featured: boolean;
}

export interface Education {
  /** Degree or programme name, e.g. "Bachelor of Computer Engineering". */
  title: string;
  /** True only for a degree actually awarded. The About page shows the awarded degree. */
  awarded: boolean;
  school: string;
  schoolShort: string;
  location: string;
  period: string;
  gpa?: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  detail: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillGroup {
  id: string;
  name: string;
  description: string;
  items: string[];
}

export const summary =
  "Fullstack engineer with two years of hands-on experience delivering web, mobile, desktop and IoT products. I take ownership of what I build, from understanding the business requirement through to shipping it and supporting it in production, and I move comfortably between technology stacks. Strong English communication, with daily experience working directly with clients and product owners.";

export const focusAreas: { title: string; description: string }[] = [
  {
    title: "End-to-end product engineering",
    description:
      "Web, mobile, desktop and IoT, built from the business requirement through to production and support.",
  },
  {
    title: "Real-time and device integration",
    description:
      "Sockets, WebSocket and WebRTC pipelines that connect barriers, cameras, POS terminals and sensors to a central platform.",
  },
  {
    title: "Client-facing delivery",
    description:
      "Acting as the primary technical contact, translating requirements into shipped features and earning trust as a technical advisor.",
  },
  {
    title: "AI-assisted engineering",
    description:
      "Agentic development with Claude Code: custom skills, subagent orchestration, MCP integrations and project memory.",
  },
];

export const experiences: Experience[] = [
  {
    id: "emct",
    role: "Fullstack Engineer",
    company: "EMCT Company Limited",
    companyUrl: "",
    location: "Ho Chi Minh City, Vietnam",
    start: "Jun 2025",
    end: "Present",
    summary:
      "Develop and maintain two company products: BDApp, a fire-safety monitoring and control system, and BDPark, an IoT platform for parking access and payment.",
    bullets: [
      "Develop and maintain two company products: BDApp, a fire-safety monitoring and control system, and BDPark, an IoT platform for parking access and payment.",
      "Ship new BDApp features and resolve customer-reported issues, supporting the onboarding of new customers while maintaining service for existing sites.",
      "Took over BDPark, restructured the codebase and closed long-standing defects, restoring stable operation for live customer facilities.",
      "Coordinate with the product owner to release features and fixes to production, and respond directly to on-site incidents at customer facilities.",
    ],
    skills: ["ASP.NET Core", ".NET MAUI", "WPF", "React", "MySQL", "WebSocket", "WebRTC"],
  },
  {
    id: "flint-avenue",
    role: "Software Developer",
    company: "Flint Avenue",
    companyUrl: "https://flintavenue.com",
    location: "Lubbock, Texas (remote)",
    start: "Feb 2025",
    end: "Jan 2026",
    summary:
      "Led development on a dedicated client project, owning technical decisions and acting as the client's primary technical contact.",
    bullets: [
      "Led development on a dedicated client project, owning technical decisions and acting as the client's primary technical contact.",
      "Translated client requirements into shipped features, iterated on feedback and kept the site healthy in production, earning the client's trust as an advisor on technical decisions.",
      "Designed and implemented features across multiple projects and collaborated with other teams, working with a range of system architectures and business domains.",
    ],
    skills: ["React", "React Native", ".NET 8", "Firebase", "SQL Server", "Azure"],
  },
  {
    id: "netpower",
    role: "Software Developer",
    company: "Netpower Vietnam",
    location: "Ho Chi Minh City, Vietnam",
    start: "Jun 2023",
    end: "Sep 2023",
    summary:
      "Built and shipped features on small internal projects, following the team's development, review and release process end to end.",
    bullets: [
      "Built and shipped features on small internal projects, following the team's development, review and release process end to end.",
      "Learned web development fundamentals, UI and system design, and SOLID principles across several frameworks and libraries.",
      "Adapted quickly to a corporate engineering environment and expanded personal network.",
    ],
    skills: ["React", ".NET", "UI design", "SOLID"],
  },
];

export const projects: Project[] = [
  {
    id: "bdpark",
    name: "BDPark",
    tagline: "Car parking history and payment management",
    period: "Jan 2026 - Present",
    employer: "EMCT Company Limited",
    role: "Fullstack Engineer",
    description:
      "BDPark is a smart parking management system for buildings and public parking facilities in South Korea. It automates vehicle access control and parking fee collection by integrating LPR, CCTV, barrier gates, LED displays and POS kiosks into one platform.",
    responsibilities: [
      "Built the device-integration layer for barriers, CCTV, LPR cameras and POS terminals.",
      "Designed a private POS and integrated VAN-network card payment.",
      "Developed the REST API, the web admin dashboard and real-time client-server communication.",
    ],
    outcome:
      "Runs in production at customer parking facilities with a fully automated entry-to-payment flow.",
    technologies: [
      "ASP.NET Core",
      "WPF",
      "React",
      "MySQL",
      "Entity Framework",
      "VAN-network payment",
      "ffmpeg",
      "EvoLPR SDK",
      "Socket / WebSocket",
      "Multithreading",
    ],
    links: [{ label: "Live", url: "https://bdpark.kr" }],
    featured: true,
  },
  {
    id: "bdapp",
    name: "BDApp",
    tagline: "Fire control and monitoring on Android and iOS",
    period: "Jun 2025 - Present",
    employer: "EMCT Company Limited",
    role: "Fullstack Engineer",
    description:
      "An end-user mobile application that shows real-time alarm status from building fire panels, CCTV and environmental sensors. It connects edge hardware controllers to a central platform, giving operators live data visualisation, alarm management and remote control.",
    responsibilities: [
      "Built the mobile UI and application logic in .NET MAUI.",
      "Designed and implemented the backend services for real-time alarm streaming and WebRTC camera feeds.",
    ],
    outcome: "Released on Android and iOS and in production use by existing customers.",
    technologies: [
      ".NET MAUI",
      ".NET Core",
      "WPF",
      "React",
      "MySQL",
      "WebSocket",
      "Multithreading",
      "WebRTC",
    ],
    links: [{ label: "Live", url: "https://bdapp.ai" }],
    featured: true,
  },
  {
    id: "tea2go",
    name: "Tea2Go",
    tagline: "Tea shop ordering platform",
    period: "Feb 2025 - Oct 2025",
    employer: "Flint Avenue",
    description:
      "A tea shop ordering platform. Customers browse nearby locations on Google Maps, check opening hours, place orders and reservations, and pay through in-app purchases.",
    responsibilities: [
      "Fixed defects, developed and shipped new features, and delivered updates to the client on schedule.",
    ],
    technologies: [
      "React Native",
      "React",
      "Firebase",
      "Firestore",
      "JavaScript / TypeScript",
    ],
    links: [],
    featured: false,
  },
  {
    id: "medical-information-simulations",
    name: "Medical Information Simulations",
    tagline: "Medical tests QC software",
    period: "Feb 2024 - May 2025",
    employer: "Dr. Carter & Flint Avenue",
    creditLabel: "Client & Employer",
    description:
      "A simulation of medical test quality control, used as a teaching tool for TTUHSC students in collaboration with Dr. Carter of TTUHSC. Placed 2nd in the TTUHSC Innovation Hub 2023 iLaunch Competition.",
    responsibilities: [
      "Analysed requirements with the client and designed the system and its architecture.",
      "Built the React frontend and .NET 8 backend and deployed the product to Azure.",
    ],
    outcome: "2nd place, TTUHSC Innovation Hub 2023 iLaunch Competition.",
    technologies: [
      "React",
      "MUI",
      "Ant Design",
      "Tailwind",
      "Redux",
      "react-hook-form",
      ".NET 8",
      "SQL Server",
      "Azure",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yuh137/medical_information_simulation",
      },
    ],
    featured: true,
  },
  {
    id: "genehub",
    name: "GeneHub",
    tagline: "Genes, diseases and pathogens search engine",
    period: "Apr 2024 - Jan 2025",
    employer: "Dr. Tetyana (TTUHSC)",
    creditLabel: "Client",
    description:
      "A search engine for genes, diseases and pathogens, a collaboration with Dr. Tetyana from TTUHSC. A clean, graphical site where medical students can search for disease information from official government sources.",
    responsibilities: [
      "Analysed requirements, designed the system and built the full stack, turning the client's concept into a working product.",
    ],
    technologies: [
      "React",
      "Redux",
      "Ant Design",
      "Tailwind",
      ".NET 8",
      "SQL Server",
      "Azure",
    ],
    links: [],
    featured: false,
  },
];

export const education: Education[] = [
  {
    title: "Doctoral Studies in Computer Science",
    awarded: false,
    school: "Texas Tech University",
    schoolShort: "TTU",
    location: "Lubbock, Texas",
    period: "Aug 2024 - Jan 2025",
    bullets: [
      "Completed one semester of PhD coursework as a funded Research Assistant, and completed several collaborative software development projects.",
      "Left the program to pursue software engineering full-time.",
    ],
  },
  {
    title: "Bachelor of Computer Engineering",
    awarded: true,
    school: "Ho Chi Minh City University of Technology",
    schoolShort: "HCMUT",
    location: "Ho Chi Minh City, Vietnam",
    period: "Oct 2020 - Jun 2024",
    gpa: "3.0",
    bullets: [
      "Studied the core and advanced areas of Computer Science and Computer Engineering.",
      "Gained practical experience working on real-world, team-based projects with other students and professors.",
      "Attended many extracurricular activities, club meetings and collaboratively organised school events.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Duolingo English Test",
    detail: "145 / 160",
    issuer: "Duolingo",
    date: "Jan 2024",
    url: "https://drive.google.com/file/d/1osexVNtdKrPQH7dM6x8NOxqG_8keMfA7/view?usp=sharing",
  },
  {
    name: "IELTS Academic",
    detail: "Band 7.5",
    issuer: "British Council / IDP",
    date: "Oct 2019",
    url: "https://drive.google.com/file/d/1EGihwLeSeTXDBQGpXP0lNd-AmWhhifQp/view?usp=sharing",
  },
];

export const languages: Language[] = [
  { name: "Vietnamese", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "Japanese", level: "Elementary" },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Web, desktop and mobile user interfaces.",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Vite",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind",
      "MUI",
      "Ant Design",
      "react-router",
      "react-hook-form",
      "React Context",
      "Redux",
      "WPF",
      ".NET MAUI",
      "React Native",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "APIs, real-time communication, authentication and databases.",
    items: [
      "ASP.NET Core",
      "Java Spring Boot",
      "Node.js",
      "NestJS",
      "REST APIs",
      "TCP Socket",
      "WebSocket",
      "WebRTC",
      "JWT",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
    ],
  },
  {
    id: "cloud",
    name: "Cloud and deployment",
    description: "Where the products above actually run.",
    items: [
      "Azure App Services",
      "Azure SQL Server",
      "AWS S3",
      "Cloudflare Tunnel",
      "Docker",
      "Windows IIS",
      "Vercel",
      "Firebase",
      "Caddy",
      "Let's Encrypt",
    ],
  },
  {
    id: "domain",
    name: "Business domains",
    description: "Problem spaces I have shipped software in.",
    items: [
      "Car parking",
      "Fire control and real-time monitoring",
      "Card payment services",
      "POS",
      "Admin dashboards",
      "E-commerce",
      "Event booking",
    ],
  },
  {
    id: "ai",
    name: "AI agent tools",
    description: "How I use agentic tooling in day-to-day engineering.",
    items: [
      "Claude Code (Desktop and CLI)",
      "Custom skill authoring",
      "Subagent orchestration and parallel agent swarms",
      "MCP server integration",
      "Project memory via CLAUDE.md",
      "Prompt and context engineering",
    ],
  },
];

/** Short list shown on the home page and the About page. */
export const featuredSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "ASP.NET Core",
  ".NET MAUI",
  "WPF",
  "Node.js",
  "NestJS",
  "MySQL",
  "SQL Server",
  "Azure",
  "Docker",
  "WebSocket",
  "WebRTC",
  "Claude Code",
];

export const featuredProjects = projects.filter((p) => p.featured);

/** The degree actually awarded, for places that show one line of education. */
export const awardedDegree = education.find((e) => e.awarded) ?? education[0];

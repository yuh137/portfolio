type PageMeta = { title: string; description: string };

export const pagesConfig: Record<
  "home" | "about" | "experience" | "projects" | "skills" | "education",
  PageMeta
> = {
  home: {
    title: "Home",
    description: "Fullstack engineer building web, mobile, desktop and IoT products.",
  },
  about: {
    title: "About",
    description: "Who I am, how I work, and what I care about when I build software.",
  },
  experience: {
    title: "Experience",
    description: "Where I have worked and what I was responsible for.",
  },
  projects: {
    title: "Projects",
    description:
      "Products I have built and shipped, from IoT parking to medical education.",
  },
  skills: {
    title: "Skills",
    description:
      "Languages, frameworks, platforms and domains I have worked with in production.",
  },
  education: {
    title: "Education",
    description: "Degree, graduate studies, certifications and languages.",
  },
};

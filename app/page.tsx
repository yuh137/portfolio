import type { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Hero } from "@/components/sections/hero";
import { HomeSection } from "@/components/sections/home-section";
import { ProjectList } from "@/components/sections/project-list";
import { ChipList } from "@/components/ui/chip";
import { pagesConfig } from "@/config/pages";
import { experiences, featuredProjects, featuredSkills } from "@/config/resume";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.title}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.title,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <ClientPageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />

      <HomeSection
        id="experience"
        title={pagesConfig.experience.title}
        description={pagesConfig.experience.description}
        href="/experience"
        linkLabel="Full experience"
      >
        <ExperienceTimeline experiences={experiences.slice(0, 2)} compact />
      </HomeSection>

      <HomeSection
        id="projects"
        title={pagesConfig.projects.title}
        description={pagesConfig.projects.description}
        href="/projects"
        linkLabel="All projects"
        muted
      >
        <ProjectList projects={featuredProjects} compact />
      </HomeSection>

      <HomeSection
        id="skills"
        title={pagesConfig.skills.title}
        description={pagesConfig.skills.description}
        href="/skills"
        linkLabel="All skills"
      >
        <AnimatedSection>
          <ChipList items={featuredSkills} variant="outline" className="justify-center" />
        </AnimatedSection>
      </HomeSection>
    </ClientPageWrapper>
  );
}

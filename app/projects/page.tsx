import type { Metadata } from "next";

import { PageContainer } from "@/components/common/page-container";
import {
  SectionAside,
  SectionGrid,
  SectionHeading,
} from "@/components/common/section-heading";
import { ProjectList } from "@/components/sections/project-list";
import { pagesConfig } from "@/config/pages";
import { projects } from "@/config/resume";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.projects.title,
  description: pagesConfig.projects.description,
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <SectionGrid>
        <SectionAside>
          <SectionHeading
            eyebrow="Selected work"
            title="Products in production, not demos."
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Newest first. Each card lists what the product does, what I was responsible
            for, and the stack it runs on.
          </p>
        </SectionAside>
        <div className="lg:col-span-8">
          <ProjectList projects={projects} />
        </div>
      </SectionGrid>
    </PageContainer>
  );
}

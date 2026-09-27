import type { Metadata } from "next";

import { PageContainer } from "@/components/common/page-container";
import {
  SectionAside,
  SectionGrid,
  SectionHeading,
} from "@/components/common/section-heading";
import { SkillGroups } from "@/components/sections/skill-groups";
import { pagesConfig } from "@/config/pages";
import { skillGroups } from "@/config/resume";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.skills.title,
  description: pagesConfig.skills.description,
  alternates: { canonical: `${siteConfig.url}/skills` },
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SectionGrid>
        <SectionAside>
          <SectionHeading eyebrow="Toolbox" title="What I have shipped with." />
          <nav className="mt-6 hidden flex-col gap-1 text-sm lg:flex">
            {skillGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {group.name}
              </a>
            ))}
          </nav>
        </SectionAside>
        <div className="lg:col-span-8">
          <SkillGroups groups={skillGroups} />
        </div>
      </SectionGrid>
    </PageContainer>
  );
}

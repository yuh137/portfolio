import type { Metadata } from "next";

import { PageContainer } from "@/components/common/page-container";
import {
  SectionAside,
  SectionGrid,
  SectionHeading,
} from "@/components/common/section-heading";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { pagesConfig } from "@/config/pages";
import { experiences } from "@/config/resume";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.experience.title,
  description: pagesConfig.experience.description,
  alternates: { canonical: `${siteConfig.url}/experience` },
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <SectionGrid>
        <SectionAside>
          <SectionHeading
            eyebrow="Career"
            title="Three roles, two years, one habit: ship it and support it."
          />
        </SectionAside>
        <div className="lg:col-span-8">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </SectionGrid>
    </PageContainer>
  );
}

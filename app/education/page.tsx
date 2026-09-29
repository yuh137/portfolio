import type { Metadata } from "next";

import { PageContainer } from "@/components/common/page-container";
import {
  SectionAside,
  SectionGrid,
  SectionHeading,
} from "@/components/common/section-heading";
import {
  CertificationCards,
  EducationCards,
  LanguageList,
} from "@/components/sections/education-cards";
import { pagesConfig } from "@/config/pages";
import { certifications, education, languages } from "@/config/resume";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.education.title,
  description: pagesConfig.education.description,
  alternates: { canonical: `${siteConfig.url}/education` },
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <div className="space-y-16">
        <SectionGrid>
          <SectionAside>
            <SectionHeading eyebrow="Studies" title="HCMUT and Texas Tech" />
          </SectionAside>
          <div className="lg:col-span-8">
            <EducationCards education={education} />
          </div>
        </SectionGrid>

        <SectionGrid>
          <SectionAside>
            <SectionHeading eyebrow="Certifications" title="English, verified" />
          </SectionAside>
          <div className="lg:col-span-8">
            <CertificationCards certifications={certifications} />
          </div>
        </SectionGrid>

        <SectionGrid>
          <SectionAside>
            <SectionHeading eyebrow="Languages" title="Three languages" />
          </SectionAside>
          <div className="lg:col-span-8">
            <LanguageList languages={languages} />
          </div>
        </SectionGrid>
      </div>
    </PageContainer>
  );
}

import type { Metadata } from "next";

import { PageContainer } from "@/components/common/page-container";
import { AboutContent } from "@/components/sections/about-content";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.about.title,
  description: pagesConfig.about.description,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <PageContainer
      title={pagesConfig.about.title}
      description={pagesConfig.about.description}
    >
      <AboutContent />
    </PageContainer>
  );
}

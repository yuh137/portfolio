import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import {
  SectionAside,
  SectionGrid,
  SectionHeading,
} from "@/components/common/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { ChipList } from "@/components/ui/chip";
import {
  awardedDegree,
  featuredSkills,
  focusAreas,
  languages,
  summary,
} from "@/config/resume";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const facts = [
  { icon: Icons.mapPin, label: "Based in", value: siteConfig.location },
  {
    icon: Icons.graduation,
    label: "Education",
    value: `${awardedDegree.title}, ${awardedDegree.schoolShort}`,
  },
  {
    icon: Icons.languages,
    label: "Languages",
    value: languages.map((l) => l.name).join(", "),
  },
  { icon: Icons.globe, label: "Open to", value: "Remote, contract and onsite work" },
];

export function AboutContent() {
  return (
    <div className="space-y-16">
      <SectionGrid>
        <SectionAside>
          <SectionHeading eyebrow="About me" title="Hello, I'm Huy." />
          <div className="mt-8 hidden lg:block">
            <Image
              src="/profile.jpg"
              alt={siteConfig.name}
              width={320}
              height={320}
              className="w-full max-w-[280px] rounded-xl border object-cover shadow-md"
            />
          </div>
        </SectionAside>
        <div className="space-y-8 lg:col-span-8">
          <AnimatedSection>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {summary}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ChipList items={featuredSkills} variant="muted" />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <dl className="grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-lg border bg-card p-4"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <fact.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </SectionGrid>

      <SectionGrid>
        <SectionAside>
          <SectionHeading eyebrow="How I work" title="What I bring to a team" />
        </SectionAside>
        <div className="lg:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={0.08 * index}>
                <article className="h-full rounded-lg border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="font-mono text-sm text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionGrid>

      <SectionGrid>
        <SectionAside>
          <SectionHeading eyebrow="Contact" title="Let's talk" />
        </SectionAside>
        <div className="lg:col-span-8">
          <AnimatedSection>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                The fastest way to reach me is email. I reply within a working day, and I
                am comfortable working across world-wide time zones.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className={cn(buttonVariants())}
                >
                  <Icons.mail className="mr-2 h-4 w-4" /> {siteConfig.email}
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <Icons.linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <Icons.github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionGrid>
    </div>
  );
}

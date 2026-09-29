import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import type { Certification, Education, Language } from "@/config/resume";

export function EducationCards({ education }: { education: Education[] }) {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <AnimatedSection key={edu.title} delay={0.1 * index}>
          <article className="rounded-lg border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">{edu.title}</h3>
                <p className="text-base text-brand sm:text-lg">
                  {edu.school}{" "}
                  <span className="text-muted-foreground">({edu.schoolShort})</span>
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Icons.mapPin className="h-3.5 w-3.5" />
                  {edu.location}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <span className="inline-flex items-center whitespace-nowrap rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand sm:text-sm">
                  {edu.period}
                </span>
                {edu.gpa && (
                  <span className="text-sm text-muted-foreground">GPA {edu.gpa}</span>
                )}
              </div>
            </div>
            <ul className="space-y-2">
              {edu.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start">
                  <span className="mr-3 mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/60" />
                  <span className="text-sm text-muted-foreground sm:text-base">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}

export function CertificationCards({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certifications.map((cert, index) => {
        const Wrapper = cert.url ? "a" : "div";
        const linkProps = cert.url
          ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <AnimatedSection key={cert.name} delay={0.1 * index}>
            <Wrapper
              {...linkProps}
              className="group flex h-full items-start gap-4 rounded-lg border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                <Icons.award className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold">{cert.name}</h3>
                  {cert.url && (
                    <Icons.externalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  )}
                </div>
                <p className="text-lg font-semibold text-brand">{cert.detail}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </Wrapper>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export function LanguageList({ languages }: { languages: Language[] }) {
  return (
    <AnimatedSection>
      <div className="rounded-lg border bg-card p-5 shadow-sm">
        <ul className="divide-y">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
            >
              <span className="flex items-center gap-2 font-medium">
                <Icons.languages className="h-4 w-4 text-brand" />
                {lang.name}
              </span>
              <span className="text-sm text-muted-foreground">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

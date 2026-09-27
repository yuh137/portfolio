import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { ChipList } from "@/components/ui/chip";
import type { Experience } from "@/config/resume";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  experiences: Experience[];
  /** Compact cards show the summary line only; full cards show every bullet. */
  compact?: boolean;
}

/**
 * Vertical timeline from devportfolio: a dot above each card and a connector below,
 * rendered with the shadcn tokens of minimal-next-portfolio.
 */
export function ExperienceTimeline({
  experiences,
  compact = false,
}: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <AnimatedSection
          key={exp.id}
          delay={0.1 * index}
          className={cn("relative", index < experiences.length - 1 ? "mb-12" : "mb-0")}
        >
          <span className="absolute -top-2 left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-brand bg-brand" />
          {index < experiences.length - 1 && (
            <span className="absolute bottom-0 left-1/2 z-10 h-12 w-0.5 -translate-x-1/2 translate-y-full bg-border" />
          )}
          <ExperienceCard experience={exp} compact={compact} />
        </AnimatedSection>
      ))}
    </div>
  );
}

export function ExperienceCard({
  experience: exp,
  compact = false,
}: {
  experience: Experience;
  compact?: boolean;
}) {
  return (
    <article className="rounded-lg border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold sm:text-xl">{exp.role}</h3>
          <p className="flex items-center gap-1.5 text-base text-brand sm:text-lg">
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {exp.company}
                <Icons.externalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              exp.company
            )}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Icons.mapPin className="h-3.5 w-3.5" />
            {exp.location}
          </p>
        </div>
        <span className="inline-flex w-fit items-center whitespace-nowrap rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand sm:text-sm">
          {exp.start} – {exp.end}
        </span>
      </div>

      {compact ? (
        <p className="text-sm text-muted-foreground sm:text-base">{exp.summary}</p>
      ) : (
        <ul className="space-y-2">
          {exp.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start">
              <span className="mr-3 mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/60" />
              <span className="text-sm text-muted-foreground sm:text-base">{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {exp.skills.length > 0 && (
        <ChipList items={exp.skills} variant="muted" className="mt-4" />
      )}
    </article>
  );
}

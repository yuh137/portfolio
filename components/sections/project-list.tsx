import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { ChipList } from "@/components/ui/chip";
import type { Project } from "@/config/resume";
import { cn } from "@/lib/utils";

interface ProjectListProps {
  projects: Project[];
  /** Compact cards show the description only; full cards add responsibilities and outcome. */
  compact?: boolean;
  /** Offset for the "01, 02, ..." numbering when the list is a subset. */
  startIndex?: number;
}

/**
 * Numbered, stacked project cards from devportfolio. The whole card is a link when the
 * project has a primary URL; the arrow badge in the corner signals it.
 */
export function ProjectList({
  projects,
  compact = false,
  startIndex = 0,
}: ProjectListProps) {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <AnimatedSection key={project.id} delay={0.08 * index}>
          <ProjectCard project={project} index={startIndex + index} compact={compact} />
        </AnimatedSection>
      ))}
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const primary = project.links[0];
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6 md:p-8">
      {primary && (
        <a
          href={primary.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name}: ${primary.label}`}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-primary/85 sm:right-6 sm:top-6 md:right-8 md:top-8 md:h-12 md:w-12"
        >
          <Icons.arrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}

      <div className="space-y-4">
        <div className={cn(primary && "pr-14 md:pr-16")}>
          <span className="font-mono text-sm text-brand">{number}</span>
          <h3 className="mt-1 text-xl font-bold sm:text-2xl">{project.name}</h3>
          <p className="text-sm text-muted-foreground sm:text-base">{project.tagline}</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1">
              <Icons.calendar className="h-3.5 w-3.5" />
              {project.period}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icons.briefcase className="h-3.5 w-3.5" />
              <span>
                {project.creditLabel ?? "Employer"}: {project.employer}
              </span>
            </span>
            {project.role && <span>· {project.role}</span>}
          </p>
        </div>

        <p
          className={cn(
            "text-base leading-relaxed text-muted-foreground",
            primary && "md:pr-8"
          )}
        >
          {project.description}
        </p>

        {!compact && (
          <>
            <ul className="space-y-2">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/60" />
                  <span className="text-sm text-foreground/90 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            {project.outcome && (
              <p className="rounded-md border-l-2 border-brand bg-muted/60 px-4 py-3 text-sm sm:text-base">
                <span className="font-semibold text-brand">Outcome. </span>
                {project.outcome}
              </p>
            )}
          </>
        )}

        <ChipList items={project.technologies} variant="solid" className="pt-1" />

        {project.links.length > 1 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.links.slice(1).map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                {link.label}
                <Icons.externalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

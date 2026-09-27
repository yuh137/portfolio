import { AnimatedSection } from "@/components/common/animated-section";
import { ChipList } from "@/components/ui/chip";
import type { SkillGroup } from "@/config/resume";

export function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="space-y-6">
      {groups.map((group, index) => (
        <AnimatedSection key={group.id} delay={0.08 * index} id={group.id}>
          <article className="rounded-lg border bg-card p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold sm:text-xl">{group.name}</h3>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </div>
            <ChipList items={group.items} variant="outline" />
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}

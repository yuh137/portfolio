import { cn } from "@/lib/utils";

/**
 * Left-column section heading with the accent underline, taken from devportfolio.
 * Not sticky by itself: put it inside <SectionAside>, which pins the whole column so
 * anything below the heading (photo, blurb, sub-nav) moves with it instead of under it.
 */
export function SectionHeading({
  title,
  eyebrow,
  className,
}: {
  title: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-brand" />
    </div>
  );
}

export function SectionGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16", className)}>
      {children}
    </div>
  );
}

/**
 * Left column of a SectionGrid. Sticky on large screens as one unit.
 *
 * This needs two nested boxes, not one:
 *
 * - The OUTER box (`lg:col-span-4`, no positioning) is left at the grid default
 *   (`align-items: stretch`), so it stretches to match the sibling column's height.
 *   That tall box is the travel range the sticky content needs.
 * - The INNER box (`lg:sticky lg:top-24`) wraps the actual heading/photo content and
 *   is short — only as tall as that content.
 *
 * Putting `sticky` directly on the outer, stretched box does not work: once a sticky
 * element's own box is as tall as (or taller than) its containing block, browsers
 * (verified in Chromium) drop sticky positioning entirely and render it as static —
 * there's no room left for it to travel, so `top` is never honoured, even at the very
 * top of the page. That's also why `self-start` alone doesn't work either: it shrinks
 * the SAME box that's supposed to provide the travel range, leaving nothing to stick
 * within. Splitting outer (tall, unpositioned) from inner (short, sticky) gives the
 * inner box a containing block that's actually taller than itself, which is what
 * `position: sticky` requires to do anything at all.
 */
export function SectionAside({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("lg:col-span-4", className)}>
      <div className="lg:sticky lg:top-24">{children}</div>
    </div>
  );
}

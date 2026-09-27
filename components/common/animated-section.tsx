import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

const directionClass = {
  up: "slide-in-from-bottom-6",
  down: "slide-in-from-top-6",
  left: "slide-in-from-right-6",
  right: "slide-in-from-left-6",
};

/**
 * Fade-and-slide entrance, implemented with CSS animations (tailwindcss-animate) so the
 * server-rendered HTML is visible without JavaScript and reduced-motion users get no motion.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) {
  return (
    <div
      id={id}
      className={cn(
        "duration-700 ease-out animate-in fade-in fill-mode-both",
        directionClass[direction],
        className
      )}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

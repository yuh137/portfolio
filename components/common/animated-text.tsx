import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface AnimatedTextProps {
  children: React.ReactNode;
  /** Seconds. */
  delay?: number;
  className?: string;
  as?: Tag;
}

/** Short fade-up used for hero and heading lines. CSS-only, see AnimatedSection. */
export function AnimatedText({
  children,
  delay = 0,
  className,
  as = "div",
}: AnimatedTextProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "duration-500 ease-out animate-in fade-in slide-in-from-bottom-3 fill-mode-both",
        className
      )}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Component>
  );
}

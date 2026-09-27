import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "muted";
  className?: string;
}

export function Chip({ children, variant = "outline", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-center whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium leading-none",
        variant === "outline" && "border border-border bg-background text-foreground",
        variant === "solid" && "bg-primary text-primary-foreground",
        variant === "muted" && "bg-muted text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ChipList({
  items,
  variant,
  className,
}: {
  items: string[];
  variant?: ChipProps["variant"];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Chip key={item} variant={variant}>
          {item}
        </Chip>
      ))}
    </div>
  );
}

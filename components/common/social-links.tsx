import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const socials = [
  {
    name: "GitHub",
    label: "github.com/yuh137",
    href: siteConfig.links.github,
    icon: Icons.github,
    external: true,
  },
  {
    name: "LinkedIn",
    label: "Huy Nguyen on LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Icons.linkedin,
    external: true,
  },
  {
    name: "Email",
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Icons.mail,
    external: false,
  },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-2", className)}>
        {socials.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.name}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "h-10 w-10 p-2"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground">
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

import Link from "next/link";

import { SocialLinks } from "@/components/common/social-links";
import { mainNav } from "@/config/routes";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="container flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="font-brand text-2xl">{siteConfig.name}</span>
          <span className="text-sm text-muted-foreground">
            {siteConfig.title} · {siteConfig.location}
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <SocialLinks />
      </div>
      <div className="container pb-8 text-center text-xs text-muted-foreground md:text-left">
        © {new Date().getFullYear()} {siteConfig.name}.
      </div>
    </footer>
  );
}

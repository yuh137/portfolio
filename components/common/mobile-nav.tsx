import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import type { NavItem } from "@/config/routes";
import { useLockBody } from "@/hooks/use-lock-body";

interface MobileNavProps {
  items: NavItem[];
  onNavigate: () => void;
  children?: React.ReactNode;
}

export function MobileNav({ items, onNavigate, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-background/80 p-6 pb-32 backdrop-blur-sm duration-200 animate-in fade-in slide-in-from-top-4 md:hidden"
    >
      <div className="relative z-20 grid gap-6 rounded-md border bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" onClick={onNavigate} className="flex items-center space-x-2">
          <span className="font-brand text-2xl">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import type { NavItem } from "@/config/routes";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <div className="duration-500 animate-in fade-in zoom-in-95">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="font-brand text-2xl">{siteConfig.name}</span>
        </Link>
      </div>
      <nav className="hidden items-center gap-6 md:flex">
        {items.map((item, index) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <motion.div
              key={item.href}
              className="duration-400 animate-in fade-in slide-in-from-top-2 fill-mode-both"
              style={{ animationDelay: `${0.08 * index}s` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                  active ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          );
        })}
      </nav>
      <motion.button
        type="button"
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu((open) => !open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-expanded={showMobileMenu}
        aria-controls="mobile-nav"
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </motion.button>
      {showMobileMenu && (
        <MobileNav items={items} onNavigate={() => setShowMobileMenu(false)}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}

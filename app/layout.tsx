import "./globals.css";

import type { Metadata } from "next";
import { Inter, Norican } from "next/font/google";
import localFont from "next/font/local";

import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { ThemeProvider } from "@/components/common/theme-provider";
import { mainNav } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
  display: "swap",
});

const fontBrand = Norican({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontBrand.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="container z-50 bg-background">
              <div className="flex h-20 items-center justify-between py-6">
                <MainNav items={mainNav} />
                <nav className="flex items-center gap-3">
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main className="container flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

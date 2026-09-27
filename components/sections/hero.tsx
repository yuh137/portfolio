import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import { SocialLinks } from "@/components/common/social-links";
import { buttonVariants } from "@/components/ui/button";
import { summary } from "@/config/resume";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center pb-12 pt-6 md:pb-16">
      <div className="mx-auto -mt-12 flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <AnimatedText delay={0}>
          <Image
            src="/profile.jpg"
            alt={siteConfig.name}
            width={160}
            height={160}
            priority
            className="h-32 w-32 rounded-full border-4 border-primary object-cover md:h-40 md:w-40"
          />
        </AnimatedText>
        <AnimatedText
          as="h1"
          delay={0.15}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {siteConfig.name}
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.3}
          className="font-heading text-lg text-brand sm:text-xl md:text-2xl"
        >
          {siteConfig.title}
        </AnimatedText>
        <AnimatedText delay={0.45} className="mt-2 max-w-[42rem]">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {summary}
          </p>
        </AnimatedText>
        <AnimatedText
          delay={0.55}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Icons.mapPin className="h-4 w-4" />
          <span>{siteConfig.location}</span>
        </AnimatedText>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <AnimatedText delay={0.65}>
            <Link href="/projects" className={cn(buttonVariants({ size: "lg" }))}>
              <Icons.briefcase className="mr-2 h-4 w-4" /> View projects
            </Link>
          </AnimatedText>
          <AnimatedText delay={0.75}>
            <Link
              href={`mailto:${siteConfig.email}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Icons.mail className="mr-2 h-4 w-4" /> Contact me
            </Link>
          </AnimatedText>
          {siteConfig.resumeUrl && (
            <AnimatedText delay={0.85}>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                <Icons.file className="mr-2 h-4 w-4" /> Resume
              </Link>
            </AnimatedText>
          )}
        </div>
        <AnimatedText delay={0.95} className="mt-4">
          <SocialLinks />
        </AnimatedText>
        <AnimatedText delay={1.2}>
          <Icons.chevronDown className="mt-6 h-6 w-6 animate-bounce text-muted-foreground" />
        </AnimatedText>
      </div>
    </section>
  );
}

import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HomeSectionProps {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  muted?: boolean;
  children: React.ReactNode;
}

/** Home-page section block from minimal-next-portfolio: centred heading, content, "View all". */
export function HomeSection({
  id,
  title,
  description,
  href,
  linkLabel = "View all",
  muted = false,
  children,
}: HomeSectionProps) {
  return (
    <AnimatedSection
      id={id}
      className={cn(
        "my-6 space-y-8 rounded-2xl py-8 md:my-10 md:py-10",
        muted && "bg-muted/60 px-4 sm:px-6 md:px-10"
      )}
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 text-center">
        <AnimatedText as="h2" className="font-heading text-3xl leading-[1.1] md:text-5xl">
          {title}
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.15}
          className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
        >
          {description}
        </AnimatedText>
      </div>
      <div className="mx-auto max-w-4xl">{children}</div>
      <AnimatedText delay={0.3} className="flex justify-center">
        <Link
          href={href}
          className={cn(buttonVariants({ variant: "outline" }), "rounded-xl")}
        >
          {linkLabel}
          <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Link>
      </AnimatedText>
    </AnimatedSection>
  );
}

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="font-mono text-sm text-brand">404</p>
      <h1 className="font-heading text-4xl">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        That page does not exist. The site has six sections, all reachable from the menu.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "mt-2")}>
        <Icons.arrowRight className="mr-2 h-4 w-4 rotate-180" /> Back home
      </Link>
    </div>
  );
}

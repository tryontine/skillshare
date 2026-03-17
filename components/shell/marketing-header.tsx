import Link from "next/link";
import { mainNavigation } from "@/lib/constants/site";
import { CommandSearch } from "@/components/shell/command-search";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketingHeader() {
  const mobileNavLinkClassName =
    "whitespace-nowrap rounded-full border border-line bg-white/70 px-3 py-2 text-xs font-medium text-ink-soft transition hover:bg-white hover:text-ink";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0 font-display text-2xl text-ink">
            SkillShare
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CommandSearch />
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Link
              href="/auth/sign-in"
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              Sign in
            </Link>
            <Link href="/auth/sign-up" className={buttonVariants({ size: "sm" })}>
              Join now
            </Link>
          </div>
        </div>
        <nav className="mt-4 flex flex-wrap gap-2 lg:hidden">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                mobileNavLinkClassName,
                item.href === "/become-a-provider" && "bg-surface text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


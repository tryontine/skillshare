import Link from "next/link";
import { marketplaceNavigation } from "@/lib/constants/site";
import { CommandSearch } from "@/components/shell/command-search";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketplaceHeader() {
  const mobileNavLinkClassName =
    "whitespace-nowrap rounded-full border border-line bg-white/70 px-3 py-2 text-xs font-medium text-ink-soft transition hover:bg-white hover:text-ink";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0 font-display text-2xl text-ink">
            SkillShare
          </Link>
          <nav className="hidden items-center gap-5 lg:flex">
            {marketplaceNavigation.map((item) => (
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
              href="/settings/profile"
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              Settings
            </Link>
            <Link
              href="/provider/onboarding"
              className={buttonVariants({ size: "sm" })}
            >
              Stripe onboarding
            </Link>
          </div>
        </div>
        <nav className="mt-4 flex flex-wrap gap-2 lg:hidden">
          {marketplaceNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                mobileNavLinkClassName,
                item.href === "/provider" && "bg-surface text-ink",
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


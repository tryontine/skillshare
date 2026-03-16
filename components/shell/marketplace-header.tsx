import Link from "next/link";
import { marketplaceNavigation } from "@/lib/constants/site";
import { CommandSearch } from "@/components/shell/command-search";
import { Button } from "@/components/ui/button";

export function MarketplaceHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[--color-line] bg-[--color-bg]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl text-[--color-ink]">
          SkillShare
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {marketplaceNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[--color-ink-soft] transition hover:text-[--color-ink]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <CommandSearch />
        <div className="ml-auto flex items-center gap-3">
          <Link href="/settings/profile" className="text-sm text-[--color-ink-soft]">
            Settings
          </Link>
          <Link href="/provider/onboarding">
            <Button size="sm">Stripe onboarding</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

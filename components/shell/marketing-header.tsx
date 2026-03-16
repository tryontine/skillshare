import Link from "next/link";
import { mainNavigation } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";
import { CommandSearch } from "@/components/shell/command-search";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[--color-line] bg-[--color-bg]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl text-[--color-ink]">
          SkillShare
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {mainNavigation.map((item) => (
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
          <Link href="/auth/sign-in" className="text-sm text-[--color-ink-soft]">
            Sign in
          </Link>
          <Link href="/auth/sign-up">
            <Button size="sm">Join now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

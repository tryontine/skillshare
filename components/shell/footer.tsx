import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 text-sm text-ink-soft sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <p>SkillShare Switzerland. Premium in-person learning and service discovery.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/browse">Browse</Link>
          <Link href="/become-a-provider">Become a provider</Link>
          <Link href="/settings/security">Security</Link>
        </div>
      </div>
    </footer>
  );
}

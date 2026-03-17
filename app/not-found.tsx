import Link from "next/link";
import { AppShell } from "@/components/shell/app-shell";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <AppShell>
      <section className="page-frame py-20">
        <Card className="mx-auto max-w-2xl p-10 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-copper">Not found</p>
          <h1 className="mt-4 font-display text-6xl">This page is not in the Swiss route map.</h1>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Try browsing services, reviewing provider dashboards, or going back to the landing page.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-alpine px-5 py-3 text-sm font-semibold text-white"
          >
            Return home
          </Link>
        </Card>
      </section>
    </AppShell>
  );
}

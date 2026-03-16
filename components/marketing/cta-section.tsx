import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="page-frame py-16">
      <Card className="mesh-panel px-8 py-10 text-white">
        <p className="text-xs uppercase tracking-[0.28em] text-white/70">
          Launch-ready marketplace
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
          Start booking premium local expertise or launch your provider profile.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/browse">
            <Button className="bg-white text-[--color-alpine] hover:bg-white/90">
              Explore services
            </Button>
          </Link>
          <Link href="/become-a-provider">
            <Button
              className="border-white/20 bg-white/10 text-white hover:bg-white/15"
              variant="secondary"
            >
              Become a provider
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  );
}

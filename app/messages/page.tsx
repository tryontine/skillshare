import Link from "next/link";
import { InboxPreview } from "@/components/dashboard/inbox-preview";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { getThreads } from "@/features/messaging/messaging-service";

export default function MessagesPage() {
  const threads = getThreads();

  return (
    <>
      <PageHero
        eyebrow="Inbox"
        title="One conversation layer for inquiries, requests, and confirmed bookings."
        description="Threads stay tied to service and booking context so both sides can manage decisions without bouncing into email."
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <InboxPreview threads={threads} />
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[--color-copper]">Thread states</p>
            <div className="mt-4 grid gap-3">
              {threads.map((thread) => (
                <Link
                  key={thread.id}
                  href={`/messages/${thread.id}`}
                  className="rounded-[20px] bg-[--color-surface] px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-[--color-ink]">{thread.title}</p>
                    <span className="text-xs text-[--color-ink-soft]">{thread.contextType}</span>
                  </div>
                  <p className="mt-2 text-sm text-[--color-ink-soft]">{thread.preview}</p>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

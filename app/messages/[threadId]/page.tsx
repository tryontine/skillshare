import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { PageHero } from "@/components/ui/page-hero";
import {
  getMessagesByThreadId,
  getThreadById,
  getThreads,
} from "@/features/messaging/messaging-service";

export default async function ThreadDetailPage({
  params,
}: {
  params: Promise<{ threadId: string }>;
}) {
  const { threadId } = await params;
  const thread = getThreadById(threadId);

  if (!thread) {
    notFound();
  }

  const messages = getMessagesByThreadId(thread.id);

  return (
    <>
      <PageHero
        eyebrow={thread.contextType}
        title={thread.title}
        description={`Conversation with ${thread.counterpart}. ${thread.unreadCount} unread messages.`}
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
          <Card className="p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-copper">All threads</p>
            <div className="mt-4 grid gap-3">
              {getThreads().map((item) => (
                <Link
                  key={item.id}
                  href={`/messages/${item.id}`}
                  className="rounded-[18px] bg-surface px-4 py-4 text-sm"
                >
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-ink-soft">{item.preview}</p>
                </Link>
              ))}
            </div>
          </Card>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="grid gap-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={message.mine ? "ml-auto max-w-xl rounded-[22px] bg-alpine px-4 py-4 text-sm text-white" : "max-w-xl rounded-[22px] bg-white/82 px-4 py-4 text-sm text-ink"}
                  >
                    <p className="font-medium">{message.author}</p>
                    <p className="mt-2 leading-7">{message.body}</p>
                    <p className="mt-3 text-xs opacity-70">{message.createdAt}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <form className="grid gap-4">
                <FormField label="Reply">
                  <textarea rows={4} placeholder="Send a reply tied to this booking or inquiry." />
                </FormField>
                <Button type="submit">
                  Send message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

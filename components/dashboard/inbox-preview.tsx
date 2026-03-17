import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { ConversationThreadDTO } from "@/types/dto";

export function InboxPreview({
  threads,
  hrefPrefix = "/messages",
}: {
  threads: ConversationThreadDTO[];
  hrefPrefix?: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-3xl">Inbox</h3>
        <Link href={hrefPrefix} className="text-sm text-alpine">
          Open all
        </Link>
      </div>
      <div className="mt-4 grid gap-3">
        {threads.map((thread) => (
          <Link
            key={thread.id}
            href={`${hrefPrefix}/${thread.id}`.replace("/messages/messages", "/messages")}
            className="rounded-[18px] bg-surface px-4 py-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-medium">{thread.title}</p>
              <span className="text-xs text-ink-soft">{thread.updatedAt}</span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{thread.preview}</p>
          </Link>
        ))}
      </div>
    </Card>
  );
}

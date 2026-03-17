import { InboxPreview } from "@/components/dashboard/inbox-preview";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getThreads } from "@/features/messaging/messaging-service";
import { consumerNavigation } from "@/lib/constants/site";

export default function ConsumerMessagesPage() {
  return (
    <DashboardShell
      title="Consumer area"
      items={consumerNavigation}
      activeHref="/consumer/messages"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Messages</h1>
        <p className="mt-4 text-sm leading-7 text-ink-soft">
          The inbox keeps inquiries and booking conversations tied to their exact service context.
        </p>
      </Card>
      <InboxPreview threads={getThreads()} />
    </DashboardShell>
  );
}

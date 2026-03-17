import { InboxPreview } from "@/components/dashboard/inbox-preview";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getThreads } from "@/features/messaging/messaging-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderInboxPage() {
  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/inbox"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Inbox</h1>
        <p className="mt-4 text-sm leading-7 text-ink-soft">
          Every thread is tied back to a service inquiry, booking request, or live booking.
        </p>
      </Card>
      <InboxPreview threads={getThreads()} />
    </DashboardShell>
  );
}

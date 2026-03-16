import { Card } from "@/components/ui/card";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { settingsNavigation } from "@/lib/constants/site";

const notificationItems = [
  "Booking request updates",
  "New inbox threads",
  "Payout status changes",
  "Review reminders after completed bookings",
];

export default function SettingsNotificationsPage() {
  return (
    <DashboardShell
      title="Settings"
      items={settingsNavigation}
      activeHref="/settings/notifications"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Notifications</h1>
        <div className="mt-6 grid gap-3">
          {notificationItems.map((item) => (
            <label key={item} className="flex items-center justify-between rounded-[20px] bg-[--color-surface] px-4 py-4 text-sm">
              {item}
              <input defaultChecked type="checkbox" />
            </label>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}

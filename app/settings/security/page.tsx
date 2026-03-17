import { Card } from "@/components/ui/card";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { settingsNavigation } from "@/lib/constants/site";

export default function SettingsSecurityPage() {
  return (
    <DashboardShell title="Settings" items={settingsNavigation} activeHref="/settings/security">
      <Card className="p-6">
        <h1 className="font-display text-5xl">Security</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[20px] bg-surface px-4 py-4 text-sm text-ink-soft">
            Password login with reset flow and callback route ready for Supabase Auth.
          </div>
          <div className="rounded-[20px] bg-surface px-4 py-4 text-sm text-ink-soft">
            Route guards and RLS-backed access policies are scaffolded for marketplace and dashboard areas.
          </div>
        </div>
      </Card>
    </DashboardShell>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { settingsNavigation } from "@/lib/constants/site";

export default function SettingsProfilePage() {
  return (
    <DashboardShell title="Settings" items={settingsNavigation} activeHref="/settings/profile">
      <Card className="p-6">
        <h1 className="font-display text-5xl">Profile</h1>
        <form className="mt-6 grid gap-4">
          <FormField label="Full name">
            <input defaultValue="Olivia Meyer" />
          </FormField>
          <FormField label="Handle">
            <input defaultValue="olivia-meyer" />
          </FormField>
          <FormField label="Bio">
            <textarea rows={5} defaultValue="Consumer and provider account for the Swiss launch preview." />
          </FormField>
          <Button type="submit">Save profile</Button>
        </form>
      </Card>
    </DashboardShell>
  );
}

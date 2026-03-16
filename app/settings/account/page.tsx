import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { settingsNavigation } from "@/lib/constants/site";

export default function SettingsAccountPage() {
  return (
    <DashboardShell title="Settings" items={settingsNavigation} activeHref="/settings/account">
      <Card className="p-6">
        <h1 className="font-display text-5xl">Account</h1>
        <form className="mt-6 grid gap-4">
          <FormField label="Email address">
            <input defaultValue="olivia@skillshare.ch" type="email" />
          </FormField>
          <FormField label="Default role context">
            <select defaultValue="consumer">
              <option value="consumer">Consumer</option>
              <option value="provider">Provider</option>
            </select>
          </FormField>
          <Button type="submit">Update account</Button>
        </form>
      </Card>
    </DashboardShell>
  );
}

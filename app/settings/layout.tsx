import { AppShell } from "@/components/shell/app-shell";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell headerVariant="marketplace">{children}</AppShell>;
}

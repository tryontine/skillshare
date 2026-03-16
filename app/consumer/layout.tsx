import { AppShell } from "@/components/shell/app-shell";

export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell headerVariant="marketplace">{children}</AppShell>;
}

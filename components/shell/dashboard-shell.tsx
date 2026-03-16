import { DashboardSidebar } from "@/components/shell/dashboard-sidebar";

export function DashboardShell({
  title,
  items,
  activeHref,
  children,
}: {
  title: string;
  items: Array<{ href: string; label: string }>;
  activeHref: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-frame py-10">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <DashboardSidebar title={title} items={items} activeHref={activeHref} />
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}

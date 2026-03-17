import { Footer } from "@/components/shell/footer";
import { MarketingHeader } from "@/components/shell/marketing-header";
import { MarketplaceHeader } from "@/components/shell/marketplace-header";

export function AppShell({
  children,
  showHeader = true,
  headerVariant = "marketing",
}: {
  children: React.ReactNode;
  showHeader?: boolean;
  headerVariant?: "marketing" | "marketplace";
}) {
  return (
    <div className="min-h-screen bg-background text-ink">
      {showHeader ? (
        headerVariant === "marketplace" ? (
          <MarketplaceHeader />
        ) : (
          <MarketingHeader />
        )
      ) : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

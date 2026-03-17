import { Card } from "@/components/ui/card";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="p-8 text-center">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <p className="mt-3 text-sm text-ink-soft">{description}</p>
    </Card>
  );
}

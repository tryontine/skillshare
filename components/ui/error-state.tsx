import { Card } from "@/components/ui/card";

export function ErrorState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border-copper/30 bg-copper/5 p-8">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{description}</p>
    </Card>
  );
}

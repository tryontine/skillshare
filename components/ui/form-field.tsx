import { cn } from "@/lib/utils";

export function FormField({
  label,
  hint,
  className,
  required,
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("grid gap-2 text-sm text-ink", className)}>
      <span className="font-medium">
        {label}
        {required && (
          <span className="ml-1 text-copper" aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
      {hint ? <span className="text-xs text-ink-soft">{hint}</span> : null}
    </label>
  );
}

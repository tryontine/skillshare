import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";

export default function ResetPasswordPage() {
  return (
    <Card className="p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-copper">Choose a new password</p>
      <h1 className="mt-4 font-display text-5xl">Set a fresh password</h1>
      <form className="mt-8 grid gap-4">
        <FormField label="New password">
          <input type="password" />
        </FormField>
        <FormField label="Confirm password">
          <input type="password" />
        </FormField>
        <Button type="submit">Update password</Button>
      </form>
      <p className="mt-6 text-sm text-ink-soft">
        <Link href="/auth/sign-in">Return to sign in</Link>
      </p>
    </Card>
  );
}

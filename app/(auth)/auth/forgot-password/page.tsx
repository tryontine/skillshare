import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";

export default function ForgotPasswordPage() {
  return (
    <Card className="p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-copper">Password reset</p>
      <h1 className="mt-4 font-display text-5xl">Reset your access</h1>
      <p className="mt-4 text-sm leading-7 text-ink-soft">
        Send a reset link to the email address on your SkillShare Switzerland profile.
      </p>
      <form className="mt-8 grid gap-4">
        <FormField label="Email address">
          <input type="email" />
        </FormField>
        <Button type="submit">Send reset link</Button>
      </form>
      <p className="mt-6 text-sm text-ink-soft">
        <Link href="/auth/sign-in">Back to sign in</Link>
      </p>
    </Card>
  );
}

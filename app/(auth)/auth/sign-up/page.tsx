import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { signUpAction } from "../actions";

export default function SignUpPage() {
  return (
    <Card className="p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-copper">Create account</p>
      <h1 className="mt-4 font-display text-5xl">Start on both sides of the marketplace</h1>
      <form action={signUpAction} className="mt-8 grid gap-4">
        <FormField label="Full name">
          <input className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine" name="fullName" placeholder="Olivia Meyer" required />
        </FormField>
        <FormField label="Email address">
          <input className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine" name="email" placeholder="you@example.com" type="email" required />
        </FormField>
        <FormField label="Password" hint="At least 8 characters.">
          <input className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine" name="password" type="password" required minLength={8} />
        </FormField>
        <Button type="submit">Create account</Button>
      </form>
      <p className="mt-6 text-sm text-ink-soft">
        Already have an account? <Link href="/auth/sign-in">Sign in</Link>
      </p>
    </Card>
  );
}

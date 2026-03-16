import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";

export default function SignInPage() {
  return (
    <Card className="p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-[--color-copper]">Sign in</p>
      <h1 className="mt-4 font-display text-5xl">Welcome back</h1>
      <form className="mt-8 grid gap-4">
        <FormField label="Email address">
          <input defaultValue="olivia@skillshare.ch" type="email" />
        </FormField>
        <FormField label="Password">
          <input defaultValue="password123" type="password" />
        </FormField>
        <Button type="submit">Sign in</Button>
      </form>
      <div className="mt-6 flex items-center justify-between text-sm text-[--color-ink-soft]">
        <Link href="/auth/forgot-password">Forgot password?</Link>
        <Link href="/auth/sign-up">Create account</Link>
      </div>
    </Card>
  );
}

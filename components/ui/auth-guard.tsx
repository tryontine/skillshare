import { getDemoSession } from "@/features/auth/session";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const session = getDemoSession();
  return session ? <>{children}</> : null;
}

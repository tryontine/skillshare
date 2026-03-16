import { getDemoSession } from "@/features/auth/session";
import { hasRole } from "@/lib/permissions";
import type { AppRole } from "@/types/app";

export function RoleGate({
  role,
  children,
}: {
  role: AppRole;
  children: React.ReactNode;
}) {
  const session = getDemoSession();
  return hasRole(session.user.roles, role) ? <>{children}</> : null;
}

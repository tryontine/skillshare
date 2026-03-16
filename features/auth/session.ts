import type { AppRole } from "@/types/app";

export interface DemoSession {
  user: {
    id: string;
    name: string;
    email: string;
    roles: AppRole[];
  };
}

export function getDemoSession(): DemoSession {
  return {
    user: {
      id: "demo-user",
      name: "Olivia Meyer",
      email: "olivia@skillshare.ch",
      roles: ["consumer", "provider"],
    },
  };
}

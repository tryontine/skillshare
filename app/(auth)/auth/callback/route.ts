import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  let nextPath = url.searchParams.get("next") ?? "/consumer";

  // Ensure nextPath is a local path to prevent open redirect vulnerabilities
  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) {
    nextPath = "/consumer";
  }

  const supabase = await createServerSupabaseClient();

  if (code && supabase) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL(nextPath, url.origin));
}

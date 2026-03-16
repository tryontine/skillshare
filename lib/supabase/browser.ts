"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";
import { supabaseEnv } from "@/lib/supabase/env";

export function createClient() {
  if (!supabaseEnv.url || !supabaseEnv.anonKey) {
    return null;
  }

  return createBrowserClient<Database>(supabaseEnv.url, supabaseEnv.anonKey);
}

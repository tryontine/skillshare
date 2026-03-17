"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function signUpAction(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("fullName")?.toString();
  const supabase = await createServerSupabaseClient();
  const headersList = await headers();
  const origin = headersList.get("origin");

  if (!email || !password || !fullName || !supabase) {
    return redirect("/auth/sign-up?error=Could not authenticate user");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect(`/auth/sign-up?error=${error.message}`);
  }

  return redirect("/auth/sign-in?message=Check email to continue sign in process");
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createServerSupabaseClient();

  if (!email || !password || !supabase) {
    return redirect("/auth/sign-in?error=Could not authenticate user");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`/auth/sign-in?error=${error.message}`);
  }

  return redirect("/consumer");
}

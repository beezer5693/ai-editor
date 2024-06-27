import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { Cookies, Route } from "@/utils/constants";
import { addYears } from "date-fns";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const cookieStore = cookies();
  const provider = searchParams.get("provider");

  if (provider) {
    cookieStore.set(Cookies.PreferredSignInOption, provider, {
      expires: addYears(new Date(), 1),
    });
  }

  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options });
          },
        },
      }
    );
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${Route.Dashboard}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

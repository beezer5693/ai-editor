import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (user && [Route.Login, Route.Signup].includes(url.pathname as Route)) {
  //   return NextResponse.redirect(new URL(Route.Dashboard, request.url));
  // }

  // if (!user && url.pathname.includes(Route.Dashboard)) {
  //   return NextResponse.redirect(new URL(Route.Login, request.url));
  // }

  // return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

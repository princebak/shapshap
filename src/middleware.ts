import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  if (
    currentPath.startsWith("/dashboard") ||
    currentPath.startsWith("/admin") ||
    currentPath.startsWith("/vendor") ||
    currentPath.startsWith("/customer")
  ) {
    const localSession = request.cookies.get("next-auth.session-token");
    const onlineSession = request.cookies.get(
      "__Secure-next-auth.session-token"
    );

    if (!localSession && !onlineSession) {
      console.log("Not logged in");
      return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login page
    }
  }

  return NextResponse.next();
}

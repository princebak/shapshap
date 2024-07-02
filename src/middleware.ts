import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const protectedPaths = ["/dashboard"]; // Add your protected paths here

  const currentPath = request.nextUrl.pathname;

  if (protectedPaths.includes(currentPath)) {
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

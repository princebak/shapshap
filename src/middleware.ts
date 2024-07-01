import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const protectedPaths = ["/dashboard"]; // Add your protected paths here

  const currentPath = request.nextUrl.pathname;

  if (protectedPaths.includes(currentPath)) {
    const session = request.cookies.get("next-auth.session-token"); // Replace with your authentication mechanism

    if (!session) {
      console.log("Not logged in");
      return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login page
    }
  }

  return NextResponse.next();
}

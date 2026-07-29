



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = [
  "/dashboard",
];


const authRoutes = [
  "/auth/login",
  "/auth/register",
];


export function middleware(
  request: NextRequest
) {
  const { pathname } = request.nextUrl;


  const accessToken =
    request.cookies.get(
      "accessToken"
    )?.value;


  const isProtectedRoute =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );


  const isAuthRoute =
    authRoutes.some((route) =>
      pathname.startsWith(route)
    );


  /*
   |--------------------------------------------------------------------------
   | Protect Dashboard
   |--------------------------------------------------------------------------
   */

  if (
    isProtectedRoute &&
    !accessToken
  ) {
    return NextResponse.redirect(
      new URL(
        "/auth/login",
        request.url
      )
    );
  }


  /*
   |--------------------------------------------------------------------------
   | Prevent logged-in users from seeing login/register
   |--------------------------------------------------------------------------
   */

  if (
    isAuthRoute &&
    accessToken
  ) {
    return NextResponse.redirect(
      new URL(
        "/dashboard",
        request.url
      )
    );
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/login",
    "/auth/register",
  ],
};
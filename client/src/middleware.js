import { NextApiResponse } from "next/server";

export function middleware(request) {
  let cookies = request.cookies.get("token")?.value;
  if (!cookies) {
    if (request.nextUrl.pathname.startsWith("/profile")) {
      return NextApiResponse.redirect(new URL("/Modal/Register", request.url));
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/Modal/Register")) {
      return NextApiResponse.redirect(new URL("/profile", request.url));
    }
  }
}

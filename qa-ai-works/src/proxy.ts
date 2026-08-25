import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  if ((host === "results.qaaiworks.com" || host === "result.qaaiworks.com") && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/admin/results", request.url));
  }
  return NextResponse.next();
}

import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, createAdminSession, verifyAdminPassword } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 4_000) return NextResponse.json({ error: "request_too_large" }, { status: 413 });
    const body = (await request.json()) as { password?: string };
    if (!body.password || !verifyAdminPassword(body.password)) return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookieName, createAdminSession(), { httpOnly: true, secure: true, sameSite: "strict", path: "/", maxAge: 8 * 60 * 60 });
    return response;
  } catch (error) {
    console.error("Admin login failed", error);
    return NextResponse.json({ error: "login_unavailable" }, { status: 500 });
  }
}

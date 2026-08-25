import { createHmac, timingSafeEqual } from "node:crypto";

export const adminCookieName = "qaai_admin_session";

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("admin_session_not_configured");
  return value;
}

function signature(expires: string) {
  return createHmac("sha256", secret()).update(`qaai-admin:${expires}`).digest("hex");
}

export function createAdminSession() {
  const expires = String(Date.now() + 8 * 60 * 60 * 1000);
  return `${expires}.${signature(expires)}`;
}

export function verifyAdminSession(value?: string) {
  if (!value) return false;
  const [expires, supplied] = value.split(".");
  if (!expires || !supplied || Number(expires) < Date.now()) return false;
  const expected = signature(expires);
  const suppliedBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(expected);
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export function verifyAdminPassword(value: string) {
  const expected = process.env.ADMIN_DASHBOARD_PASSWORD;
  if (!expected || expected.length < 12) throw new Error("admin_password_not_configured");
  const suppliedBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}

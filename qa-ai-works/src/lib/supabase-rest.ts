type RpcPayload = Record<string, unknown>;

export async function callSupabaseRpc<T>(functionName: string, payload: RpcPayload): Promise<T> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("supabase_not_configured");

  const response = await fetch(`${supabaseUrl}/rest/v1/rpc/${functionName}`, {
    method: "POST",
    headers: { apikey: supabaseAnonKey, Authorization: `Bearer ${supabaseAnonKey}`, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload), cache: "no-store",
  });
  if (!response.ok) {
    const detail = await response.text();
    console.error(`Supabase RPC ${functionName} failed`, response.status, detail);
    throw new Error("database_write_failed");
  }
  const text = await response.text();
  return (text ? JSON.parse(text) : null) as T;
}

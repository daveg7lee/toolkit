import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.value) return;

  const id = Math.random().toString(36).substr(2, 6);

  await sql`INSERT INTO links (alias, target) VALUES (${id}, ${data.value});`;

  return Response.json({
    ok: true,
    id,
  });
}

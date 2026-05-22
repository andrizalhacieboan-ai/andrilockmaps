import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || "libsql://your-database-name.turso.io",
  authToken: process.env.TURSO_AUTH_TOKEN || "your-turso-token"
});

import { Pool } from "pg";

const globalForPg = globalThis as unknown as {
  chocolateCityPool?: Pool;
};

function createPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });
}

export const db =
  globalForPg.chocolateCityPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalForPg.chocolateCityPool = db;
}

import dotenv from "dotenv";

dotenv.config();

/** @type {import("drizzle-kit").Config} */
export default {
  dialect: "postgresql", // Ensure this is correct
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
};

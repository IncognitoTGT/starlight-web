import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());
export default defineConfig({
	dialect: "postgresql",
	schema: "./src/lib/db/schema/index.ts",
	out: ".",
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
});

import "dotenv/config";
import config from "./env";

export default defineConfig({
  schema: "src/prisma/schema.prisma",
  migrations: {
    path: "src/prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: config.database_url,
  },
});

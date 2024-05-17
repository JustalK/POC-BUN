import { toWebHandler } from "h3";
import { app } from "./index.ts";

const server = Bun.serve({
  port: 3000,
  fetch: toWebHandler(app),
});

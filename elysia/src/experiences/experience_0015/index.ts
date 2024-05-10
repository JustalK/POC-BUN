import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

// See main index.ts
// The plugin is registered there

export const experience_0015 = new Elysia({
  name: folder,
  prefix: `/${folder}`,
}).get("/", () => ({ method: "GET" }), {
  detail: {
    summary: "This is the get of experience 15",
    tags: ["Test"],
  },
});

export default experience_0015;

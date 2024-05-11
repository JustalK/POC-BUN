import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience = new Elysia({
  name: folder,
  prefix: `/${folder}`,
})
  .get("/", () => ({ method: "GET" }))
  .post("/", () => ({ method: "POST" }));

export default experience;

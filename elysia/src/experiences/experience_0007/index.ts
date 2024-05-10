import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0007 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app.get("/", () => process.env.TEST);
});

export default experience_0007;

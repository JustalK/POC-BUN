import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0008 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app
    .get("/", () => ({ method: "GET" }))
    .get("/all/*", ({ params }) => ({
      method: "GET",
      params: params["*"].split("/"),
    }))
    .get("/:id", ({ params }) => ({ method: "GET", id: params.id }));
});

export default experience_0008;

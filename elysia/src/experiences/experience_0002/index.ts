import { Elysia, t } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0002 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app
    .get("/", ({ redirect }) => {
      return redirect("http://localhost:3000/experience_0001", 301);
    })
    .get("/test", ({ query }) => {
      return { method: "GET", query };
    })
    .post(
      "/",
      async ({ body }) => {
        return {
          method: "POST",
          username: body.username,
        };
      },
      {
        body: t.Object({
          username: t.String(),
        }),
      }
    )
    .patch("/", async ({ body }) => {
      return { method: "PATCH", data: body };
    });
});

export default experience_0002;

import { Elysia, t } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0016 = new Elysia({
  name: folder,
  prefix: `/${folder}`,
})
  .get("/", () => "This is experience 16")
  .get("/all", ({ query }) => ({ query }), {
    query: t.Object({
      id: t.Number(),
    }),
    transform({ query }) {
      query.id = Number(query.id);
    },
  })
  .post("/", ({ body }) => ({ id: body.id }), {
    body: t.Object({
      id: t.Number(),
    }),
  });

export default experience_0016;

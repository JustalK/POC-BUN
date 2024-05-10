import { Elysia, t } from "elysia";
import { ip } from "elysia-ip";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0012 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app
    .use(ip())
    .onRequest(() => {
      // On request entering
    })
    .onParse(({ request }) => {
      // Parse
    })
    .onTransform(() => {
      // On transform
      console.log(1);
    })
    .onBeforeHandle(({ set, params }) => {
      if ((params as { id: number }).id === 0) {
        return (set.status = "Unauthorized");
      }
    })
    .onAfterHandle(({ params }) => {
      // After
      if ((params as { id: number }).id === 10) {
        return { test: "kevin" };
      }
    })
    .onResponse(() => {
      console.log("Response");
    })
    .get("/ip", ({ ip }) => ip)
    .get("/:id", ({ params }) => ({ id: typeof params.id }))
    .get("/alt/:id", ({ params }) => ({ id: typeof params.id }), {
      params: t.Object({
        id: t.Number(),
      }),
      transform({ params }) {
        params.id = Number(params.id);
      },
    })
    .listen(3001);
});

export default experience_0012;

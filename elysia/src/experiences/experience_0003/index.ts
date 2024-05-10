import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { bearer } from "@elysiajs/bearer";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

const secret = "SeCrEt";

export const experience_0003 = new Elysia({
  name: folder,
})
  .use(
    jwt({
      name: "jwt",
      secret,
    })
  )
  .use(bearer())
  .group(`/${folder}`, (app) => {
    return app
      .derive(({ headers }) => {
        const auth = headers["authorization"];

        return {
          test: auth?.startsWith("Bearer ") ? auth.slice(7) : null,
        };
      })
      .get(
        "/",
        async ({ jwt }) =>
          await jwt.sign({
            data: "kevin",
          })
      )
      .post("/", async ({ jwt, bearer }) => await jwt.verify(bearer))
      .post("/alt", async ({ test, jwt }) => await jwt.verify(test || ""));
  });

export default experience_0003;

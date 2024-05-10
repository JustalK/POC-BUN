import { Elysia, t } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

const secret = "SeCrEt2";

export const experience_0014 = new Elysia({
  name: folder,
  prefix: `/${folder}`,
})
  .get(
    "/",
    ({
      cookie: {
        test: { value },
      },
    }) => {
      return { value };
    },
    {
      cookie: t.Cookie({
        test: t.Object({
          value: t.String(),
        }),
      }),
    }
  )
  .post("/", ({ cookie: { test } }) => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    test.set({
      domain: "localhost",
      httpOnly: true,
      value: "kevin",
      expires: nextYear,
      path: "/",
    });
  })
  .patch("/", ({ cookie: { test } }) => {
    test.value = "test";
  })
  .delete("/", ({ cookie: { test } }) => {
    test.remove();
  })
  .post(
    "/signed",
    ({ cookie: { secured } }) => {
      secured.value = {
        id: 1337,
        name: "kevin",
      };
    },
    {
      cookie: t.Cookie(
        {
          secured: t.Object({
            id: t.Numeric(),
            name: t.String(),
          }),
        },
        {
          secrets: secret,
          sign: ["secured"],
        }
      ),
    }
  )
  .get(
    "/signed",
    ({ cookie: { secured } }) => {
      return { value: secured };
    },
    {
      cookie: t.Cookie({
        secured: t.Object({
          id: t.Numeric(),
          name: t.String(),
        }),
      }),
    }
  );

export default experience_0014;

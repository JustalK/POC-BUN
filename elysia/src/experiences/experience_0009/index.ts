import { Elysia, NotFoundError } from "elysia";

/**
NOT_FOUND
INTERNAL_SERVER_ERROR
VALIDATION
PARSE
UNKNOWN
**/

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

class MyError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

export const experience_0009 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app
    .onError(({ code, error, set }) => {
      console.log(code);
      if (code === "NOT_FOUND") {
        set.status = 404;

        return "Well, not found";
      }
    })
    .error({
      MyError,
    })
    .get("/", ({ set }) => {
      set.status = 233;
      set.headers["test"] = "kevin";
      return { method: "GET" };
    })
    .get("/throw", () => {
      throw new Error("Throw an error");
    })
    .get("/error", ({ error }) => {
      throw new NotFoundError();
    })
    .get("/error2", () => {
      throw new MyError("Hello Error");
    });
});

export default experience_0009;

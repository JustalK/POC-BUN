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

export const experience_0010 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app.state("reached", 0).get("/", ({ store }) => {
    store.reached++;
    return { reached: store.reached };
  });
});

export default experience_0010;

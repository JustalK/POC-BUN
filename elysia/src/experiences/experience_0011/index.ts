import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

class Test {
  ftest() {
    return "TEST";
  }
}

class Test2 {
  ftest() {
    return "TEST2";
  }
}

export const experience_0011 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app
    .decorate({
      test: new Test(),
      test2: new Test2(),
    })
    .get("/test", ({ test }) => {
      return { result: test.ftest() };
    })
    .get("/test2", ({ test2 }) => {
      return { reached: test2.ftest() };
    });
});

export default experience_0011;

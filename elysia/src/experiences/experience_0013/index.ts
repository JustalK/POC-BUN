import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

// Look in the main index.ts
// Trace does not working in plugin

export const experience_0013 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app.get("/", async () => {
    await sleep(2500);
    return { method: "GET" };
  });
});

export default experience_0013;

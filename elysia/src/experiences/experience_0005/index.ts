import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

const path = `${import.meta.dir}/file.txt`;

export const experience_0005 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app.use(staticPlugin()).get("/", () => Bun.file(path));
});

export default experience_0005;

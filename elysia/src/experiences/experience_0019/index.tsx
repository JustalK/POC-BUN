import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0019 = new Elysia({
  name: folder,
  prefix: `/${folder}`,
})
  .use(html())
  .get("/", () => {
    return (
      <html lang="en">
        <head>
          <title>Hello World</title>
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      </html>
    );
  });

export default experience_0019;

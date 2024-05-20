import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0004 = new Elysia({
  name: folder,
}).group(`/${folder}`, (app) => {
  return app.post("/", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const data = await response.json();
    return { method: "POST", ...data };
  });
});

export default experience_0004;

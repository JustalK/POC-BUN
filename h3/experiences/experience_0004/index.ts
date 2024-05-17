import { createRouter, defineEventHandler } from "h3";

const secret = "SeCrEt";

const router = createRouter().post(
  "/",
  defineEventHandler(async () => {
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
  })
);
export default router.handler;

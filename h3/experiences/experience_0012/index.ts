import { createRouter, defineEventHandler } from "h3";

export const middleware = defineEventHandler((event) => {
  console.log(`Middleware. Path: ${event.path}`);
});

const router = createRouter().get(
  "/",
  defineEventHandler((event) => {
    middleware(event);
    return { method: "GET" };
  })
);
export default router.handler;

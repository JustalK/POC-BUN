import { createRouter, defineEventHandler } from "h3";

const router = createRouter().get(
  "/",
  defineEventHandler((event) => {
    return {
      context: event.context,
    };
  })
);
export default router.handler;

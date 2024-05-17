import { createRouter, defineEventHandler } from "h3";
import "dotenv/config";

const router = createRouter().get(
  "/",
  defineEventHandler(async () => {
    return { test: process.env.TEST };
  })
);
export default router.handler;

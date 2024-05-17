import {
  createError,
  createRouter,
  defineEventHandler,
  setResponseStatus,
} from "h3";
import "dotenv/config";

const router = createRouter()
  .get(
    "/",
    defineEventHandler(() => {
      throw createError({
        status: 400,
        message: "This is an error",
      });
    })
  )
  .get(
    "/not-found",
    defineEventHandler(() => {
      throw createError({
        status: 404,
        message: "Not Found",
      });
    })
  )
  .get(
    "/alt/not-found",
    defineEventHandler((event) => {
      setResponseStatus(event, 404, "Not Found");
      return "Not Found";
    })
  );
export default router.handler;

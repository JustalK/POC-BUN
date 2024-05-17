import {
  createRouter,
  defineEventHandler,
  getRouterParam,
  getRouterParams,
} from "h3";
import "dotenv/config";

const router = createRouter()
  .get(
    "/:id",
    defineEventHandler((event) => {
      const id = getRouterParam(event, "id");
      return { param: id };
    })
  )
  .get(
    "/all/**",
    defineEventHandler((event) => {
      const params = getRouterParams(event)._.split("/");
      return { params };
    })
  );
export default router.handler;

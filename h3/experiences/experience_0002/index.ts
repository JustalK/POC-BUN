import {
  createRouter,
  defineEventHandler,
  getRequestHeaders,
  getValidatedRouterParams,
  getRouterParam,
  readFormData,
  readBody,
  getQuery,
  sendRedirect,
} from "h3";

const router = createRouter()
  .get(
    "/",
    defineEventHandler((event) => {
      const headers = getRequestHeaders(event);
      const query = getQuery(event);
      return {
        query,
        headers,
      };
    })
  )
  .get(
    "/:id",
    defineEventHandler((event) => {
      const id = getRouterParam(event, "id");
      return {
        id,
      };
    })
  )
  .get(
    "/validation/:id",
    defineEventHandler(async (event) => {
      const params = await getValidatedRouterParams(event, (data: any) => {
        return typeof data.id === "string";
      });
      return {
        params,
      };
    })
  )
  .post(
    "/",
    defineEventHandler(async (event) => {
      const body = await readBody(event);
      return { ...body };
    })
  )
  .post(
    "/form",
    defineEventHandler(async (event) => {
      const formData = await readFormData(event);
      const username = formData.get("username");
      return { username };
    })
  )
  .get(
    "/redirect",
    defineEventHandler((event) => {
      return sendRedirect(event, "http://localhost:3000/experience_0001", 301);
    })
  );
export default router.handler;

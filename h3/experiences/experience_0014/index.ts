import {
  createRouter,
  defineEventHandler,
  setCookie,
  getCookie,
  deleteCookie,
} from "h3";

const router = createRouter()
  .get(
    "/",
    defineEventHandler((event) => {
      const name = getCookie(event, "test");
      return { name };
    })
  )
  .post(
    "/",
    defineEventHandler((event) => {
      const nextYear = new Date();
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      setCookie(event, "test", "kevin", {
        domain: "localhost",
        httpOnly: true,
        expires: nextYear,
        path: "/",
      });
      return { method: "POST" };
    })
  )
  .delete(
    "/",
    defineEventHandler((event) => {
      deleteCookie(event, "test");
      return { method: "DELETE" };
    })
  );
export default router.handler;

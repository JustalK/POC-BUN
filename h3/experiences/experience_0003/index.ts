import { createRouter, defineEventHandler, getRequestHeader } from "h3";

import jwt from "jsonwebtoken";

const secret = "SeCrEt";

const router = createRouter()
  .get(
    "/",
    defineEventHandler((event) => {
      const token = jwt.sign(
        {
          data: "kevin",
        },
        secret,
        { expiresIn: "1h" }
      );
      return {
        token,
      };
    })
  )
  .post(
    "/",
    defineEventHandler((event) => {
      const token = getRequestHeader(event, "authorization");
      const bearer = token ? token.split(" ")["1"] : "";
      const decoded = jwt.verify(bearer, secret);
      return { decoded };
    })
  );
export default router.handler;

import { Elysia } from "elysia";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience = new Elysia({
  name: folder,
  prefix: `/${folder}`,
})
  .macro(({ onBeforeHandle }) => ({
    auth(isActive: boolean) {
      onBeforeHandle(({ params: { id } }) => {
        console.log(isActive);
        if (isActive && id === "0") {
          return "Unauthorized";
        }
      });
    },
  }))
  .get("/:id", () => ({ method: "GET" }), {
    auth: false,
  })
  .get("/auth/:id", () => ({ method: "GET" }), {
    auth: true,
  });

export default experience;

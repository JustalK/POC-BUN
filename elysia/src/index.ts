import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { Glob } from "bun";

/**
 * Add all the experience - lazy loading
 */
export const loadStatic = async (app: Elysia) => {
  const glob = new Glob("src/experiences/**/index.{ts,tsx}");
  for (const file of glob.scanSync({ cwd: ".", absolute: true })) {
    console.log(file);
    app.use(import(file));
  }

  return app;
};

const experiences = new Elysia().use(loadStatic);

export const app = new Elysia()
  .trace(async ({ handle, set }) => {
    const { time, end } = await handle;

    console.log("Time", (await end) - time);
    set.headers["Server-Timing"] = `duration=${(await end) - time}`;
  })
  .use(
    swagger({
      documentation: {
        info: {
          title: "Poc Documentation",
          version: "1.0.0",
        },
        tags: [{ name: "Test", description: "Test of Experience 15" }],
      },
    })
  )
  .use(experiences)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

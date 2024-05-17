import {
  createRouter,
  defineEventHandler,
  serveStatic,
  readBody,
  sendRedirect,
} from "h3";
import { stat, readFile, writeFile } from "node:fs/promises";
import { join } from "pathe";

const directory = join(__dirname, "public");

const router = createRouter()
  .get(
    "/",
    defineEventHandler(async (event) => {
      return serveStatic(event, {
        getContents: () => readFile(join(directory, "file.txt")),
        getMeta: async () => {
          const stats = await stat(join(directory, "file.txt")).catch(() => {});

          if (!stats || !stats.isFile()) {
            return;
          }

          return {
            size: stats.size,
            mtime: stats.mtimeMs,
          };
        },
      });
    })
  )
  .post(
    "/",
    defineEventHandler(async (event) => {
      try {
        const data = await readBody(event);
        await writeFile(join(directory, "file.txt"), data.sentance + "\n", {
          flag: "a+",
        });
        const response = await readFile(join(directory, "file.txt"));
        return response.toString();
      } catch (err) {
        console.log(err);
      }
    })
  );
export default router.handler;

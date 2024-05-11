import { Elysia } from "elysia";
import { cron } from "@elysiajs/cron";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

export const experience_0001 = new Elysia({
  name: folder,
  prefix: `/${folder}`,
})
  .use(
    cron({
      name: "heartbeat",
      pattern: "* * * * * *",
      paused: true, // Use resume to start the cron
      run() {
        console.log("Heartbeat");
      },
    })
  )
  .get(
    "/pause",
    ({
      store: {
        cron: { heartbeat },
      },
    }) => {
      heartbeat.pause();

      return "Stop heartbeat";
    }
  )
  .get(
    "/resume",
    ({
      store: {
        cron: { heartbeat },
      },
    }) => {
      heartbeat.resume();

      return "Resume heartbeat";
    }
  );

export default experience_0001;

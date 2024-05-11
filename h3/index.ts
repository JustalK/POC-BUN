// Import h3 as npm dependency
import { createApp, createRouter, defineEventHandler, useBase } from "h3";
import { readdirSync } from "fs";

// Create an app instance
export const app = createApp({
  debug: true,
});

// Create a new router and register it in app
const router = createRouter();
app.use(router);

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

for (const file of getDirectories("./experiences")) {
  app.use(
    `/${file.toString()}`,
    () => import(`./experiences/${file.toString()}`),
    {
      lazy: true,
    }
  );
}

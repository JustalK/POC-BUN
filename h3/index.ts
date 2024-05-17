// Import h3 as npm dependency
import { createApp, createRouter, defineEventHandler, useBase } from "h3";
import { readdirSync } from "fs";
import { middleware } from "./experiences/experience_0012";

// Create an app instance
export const app = createApp({
  debug: true,
  onError: () => {
    console.log("Global Error Handling");
  },
  onRequest: (event) => {
    event.context["whatever"] = "This is a text from onRequest golbal hook.";
    // Use the middleware of experience 12
    if (event.path === "/experience_0012") {
      middleware(event);
    }
  },
});

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

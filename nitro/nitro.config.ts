//https://nitro.unjs.io/config
export default defineNitroConfig({
  experimental: {
    tasks: true,
  },
  scheduledTasks: {
    "* * * * *": ["experience_0019"],
  },
  routeRules: {
    "/experience_0002/redirect": { redirect: "/experience_0001" },
  },
  storage: {
    upload: {
      driver: "fs",
      base: "./upload",
    },
  },
  srcDir: "server",
  runtimeConfig: {
    test: "Kevin",
  },
});

//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    "/experience_0002/redirect": { redirect: "/experience_0001" },
  },
  srcDir: "server",
});

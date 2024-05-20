export default defineEventHandler(async () => {
  await useStorage("cache").removeItem("nitro:functions:myDate:default.json");
  return true;
});

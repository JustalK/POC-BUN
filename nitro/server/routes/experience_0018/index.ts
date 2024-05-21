export default eventHandler(async (event) => {
  return useRuntimeConfig(event).test;
});

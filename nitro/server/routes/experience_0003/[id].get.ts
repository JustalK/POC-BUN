export default eventHandler((event) => {
  const id = getRouterParam(event, "id");
  return { id };
});

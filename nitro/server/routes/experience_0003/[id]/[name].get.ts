export default eventHandler((event) => {
  const id = getRouterParam(event, "id");
  const name = getRouterParam(event, "name");
  return { id, name };
});

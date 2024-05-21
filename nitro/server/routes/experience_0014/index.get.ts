export default eventHandler(async (event) => {
  const name = getCookie(event, "test");
  return { name };
});

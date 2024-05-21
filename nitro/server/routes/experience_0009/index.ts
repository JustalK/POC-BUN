export default eventHandler(async (event) => {
  setResponseStatus(event, 404, "Not Found");
  return "Not Found";
});
